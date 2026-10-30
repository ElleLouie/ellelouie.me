import { useEffect, useRef, useState } from 'react';

// A colour grade applied to the baked textures: slightly lower and warmer exposure,
// richer colour, and the brightest areas rolled off so sunlit walls don't read as pure white.
const gradeShader = (shader) => {
  shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
    #include <map_fragment>
    diffuseColor.rgb *= 0.88 * vec3(1.03, 1.0, 0.96);
    float luma = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
    diffuseColor.rgb = mix(vec3(luma), diffuseColor.rgb, 1.25);
    diffuseColor.rgb *= 1.0 - 0.3 * smoothstep(0.3, 0.9, luma);
  `);
};

// Interactive view of a baked .glb room. The lighting is baked into the textures,
// so every material is shown unlit, exactly as it came out of Blender.
function RoomViewer({ src, poster, alt }) {
  const container = useRef(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    Promise.all([
      import('three'),
      import('three/examples/jsm/loaders/GLTFLoader.js'),
      import('three/examples/jsm/controls/OrbitControls.js'),
      import('three/examples/jsm/libs/meshopt_decoder.module.js'),
    ]).then(([THREE, { GLTFLoader }, { OrbitControls }, { MeshoptDecoder }]) => {
      if (cancelled) return;
      const el = container.current;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        setStatus('failed');
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 2000);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enablePan = false;
      // hide the "drag" hint and stop the idle sway once someone starts exploring
      controls.addEventListener('start', () => {
        controls.autoRotate = false;
        setStatus('exploring');
      }, { once: true });

      let frame;
      const render = () => {
        // sway back and forth between the rotation limits while idle
        if (controls.autoRotate) {
          const azimuth = controls.getAzimuthalAngle();
          if (azimuth <= controls.minAzimuthAngle + 0.05) controls.autoRotateSpeed = -Math.abs(controls.autoRotateSpeed);
          if (azimuth >= controls.maxAzimuthAngle - 0.05) controls.autoRotateSpeed = Math.abs(controls.autoRotateSpeed);
        }
        controls.update();
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(el);
      resize();

      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);
      loader.load(src, (gltf) => {
        if (cancelled) return;
        const room = gltf.scene;
        room.traverse((child) => {
          if (!child.isMesh) return;
          const { map } = child.material;
          child.material.dispose();
          child.material = new THREE.MeshBasicMaterial({ map, side: THREE.DoubleSide });
          child.material.onBeforeCompile = gradeShader;
        });
        scene.add(room);

        // frame the room from the front corner, like the renders
        const box = new THREE.Box3().setFromObject(room);
        const center = box.getCenter(new THREE.Vector3());
        const radius = box.getSize(new THREE.Vector3()).length() / 2;
        // fit to whichever is narrower, the frame's height or its width
        const vFov = THREE.MathUtils.degToRad(camera.fov);
        const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect);
        const distance = radius / Math.sin(Math.min(vFov, hFov) / 2) * 0.88;
        controls.target.copy(center);
        const front = new THREE.Spherical(distance, THREE.MathUtils.degToRad(58), THREE.MathUtils.degToRad(45));
        camera.position.setFromSpherical(front).add(center);

        // only allow views of the open sides of the room
        controls.minAzimuthAngle = THREE.MathUtils.degToRad(5);
        controls.maxAzimuthAngle = THREE.MathUtils.degToRad(85);
        controls.minPolarAngle = THREE.MathUtils.degToRad(30);
        controls.maxPolarAngle = THREE.MathUtils.degToRad(80);
        controls.minDistance = distance * 0.6;
        controls.maxDistance = distance * 1.25;
        controls.autoRotate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        controls.autoRotateSpeed = 0.5;
        controls.update();

        setStatus('ready');
        render();
      }, undefined, () => setStatus('failed'));

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        controls.dispose();
        scene.traverse((child) => {
          if (!child.isMesh) return;
          child.geometry.dispose();
          child.material.map?.dispose();
          child.material.dispose();
        });
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => setStatus('failed'));

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [src]);

  return (
    <div className={`room_viewer room_viewer-${status}`}>
      {(status === 'loading' || status === 'failed') && <img src={poster} alt={alt} className="room_viewer_poster" />}
      <div ref={container} className="room_viewer_canvas" />
      {status === 'loading' && <p className="room_viewer_hint label">Loading 3D&hellip;</p>}
      {status === 'ready' && <p className="room_viewer_hint label">Drag to look around</p>}
    </div>
  );
}

export default RoomViewer;
