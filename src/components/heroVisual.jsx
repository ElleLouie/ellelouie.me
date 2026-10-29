import { useEffect, useRef, useState } from 'react';

// A slowly turning blush knot, built with Three.js. Three is loaded on demand so it
// doesn't slow down the first paint; if WebGL isn't available a soft gradient shows instead.
function HeroVisual(props) {
  const container = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    import('three').then((THREE) => {
      if (cancelled) return;
      const el = container.current;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.z = 7.5;

      const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 260, 40, 2, 3);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0xe0aaa6,
        roughness: 0.5,
        clearcoat: 0.4,
        clearcoatRoughness: 0.6,
        sheen: 1,
        sheenColor: new THREE.Color(0xf5efe6),
      });
      const knot = new THREE.Mesh(geometry, material);
      scene.add(knot);

      scene.add(new THREE.HemisphereLight(0xfbf8f3, 0x9c5f68, 1.6));
      const key = new THREE.DirectionalLight(0xfff1e6, 2.2);
      key.position.set(3, 4, 5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(0xc48b92, 1.5);
      rim.position.set(-4, -2, -3);
      scene.add(rim);

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = el;
        renderer.setSize(w, h);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(el);
      resize();

      // tilt gently toward the pointer
      const target = { x: 0, y: 0 };
      const onPointer = (e) => {
        target.x = (e.clientY / window.innerHeight - 0.5) * 0.5;
        target.y = (e.clientX / window.innerWidth - 0.5) * 0.5;
      };
      window.addEventListener('pointermove', onPointer);

      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let frame;
      const clock = new THREE.Clock();
      const render = () => {
        const t = clock.getElapsedTime();
        knot.rotation.x += (target.x + t * 0.12 - knot.rotation.x) * 0.05;
        knot.rotation.y += (target.y + t * 0.18 - knot.rotation.y) * 0.05;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };
      if (still) {
        knot.rotation.set(0.4, 0.6, 0);
        renderer.render(scene, camera);
      } else {
        render();
      }

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener('pointermove', onPointer);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => setFailed(true));

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={container} className={failed ? 'hero_visual hero_visual-fallback' : 'hero_visual'} aria-hidden="true" />;
}

export default HeroVisual;
