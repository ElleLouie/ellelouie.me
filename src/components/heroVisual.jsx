import { useEffect, useRef, useState } from 'react';

const PALETTE = {
  pink: 0xe4bcc0,
  mauve: 0xc99aa3,
  cream: 0xf6eee6,
  plum: 0x8e5462,
};

// colour treatments for the pearls shape
const PEARL_FINISHES = {
  // real pearl sheen: pale bases with a rainbow shimmer as they turn
  iridescent: {
    colors: [0xfaf3ee, 0xf3d9dc, 0xefe4d2, 0xe6dcef, 0xf6e6dc, 0xdfe8ea],
    material: {
      roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.08, iridescence: 1, iridescenceIOR: 1.6, iridescenceThicknessRange: [200, 600], sheen: 0,
    },
  },
  pastel: {
    colors: [0xf7f0ea, 0xf2b8c6, 0xc9b6e4, 0xf6c9a8, 0xf3e2a0, 0xb9d3c2],
    material: { roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.1 },
  },
  jewel: {
    colors: [0xf6efe8, 0x8e2a3e, 0x1f6b57, 0x2d4c8a, 0xc99a3c, 0x6b3d48],
    material: {
      roughness: 0.12, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, sheen: 0,
    },
  },
};

// Each shape returns the object to add to the scene and a per-frame update.
const shapes = {
  knot(THREE, material) {
    const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(1.2, 0.38, 260, 40, 2, 3), material(PALETTE.pink));
    return { object: mesh, update() {} };
  },

  // a soft sphere that slowly breathes and wobbles
  blob(THREE, material) {
    const geometry = new THREE.SphereGeometry(1.6, 128, 128);
    const base = geometry.attributes.position.array.slice();
    const mesh = new THREE.Mesh(geometry, material(PALETTE.pink));
    const v = new THREE.Vector3();
    return {
      object: mesh,
      update(t) {
        const pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i += 1) {
          v.set(base[i * 3], base[i * 3 + 1], base[i * 3 + 2]).normalize();
          const wobble = 0.14 * Math.sin(v.x * 2.4 + t * 0.9) * Math.sin(v.y * 2.1 + t * 0.7) * Math.sin(v.z * 2.7 + t * 0.5);
          v.multiplyScalar(1.6 * (1 + wobble));
          pos.setXYZ(i, v.x, v.y, v.z);
        }
        pos.needsUpdate = true;
        geometry.computeVertexNormals();
      },
    };
  },

  // the flower from the original site, now in 3D
  flower(THREE, material) {
    const group = new THREE.Group();
    const petal = new THREE.CapsuleGeometry(0.5, 2.2, 16, 48);
    [0, 60, 120].forEach((deg) => {
      const mesh = new THREE.Mesh(petal, material(PALETTE.pink));
      mesh.rotation.z = (deg * Math.PI) / 180;
      mesh.scale.z = 0.55;
      group.add(mesh);
    });
    const center = new THREE.Mesh(new THREE.SphereGeometry(0.42, 48, 48), material(PALETTE.cream));
    center.position.z = 0.25;
    group.add(center);
    return { object: group, update() {} };
  },

  // a little cluster of glossy pearls that drift
  pearls(THREE, material, variant = 'iridescent') {
    const group = new THREE.Group();
    const layout = [
      [0, 0, 0, 0.9], [1.25, 0.55, -0.5, 0.55], [-1.1, 0.75, 0.4, 0.48],
      [-0.75, -1.05, -0.3, 0.6], [0.95, -0.95, 0.6, 0.38], [0.2, 1.35, -0.2, 0.32],
    ];
    const finish = PEARL_FINISHES[variant] || PEARL_FINISHES.iridescent;
    const sphere = new THREE.SphereGeometry(1, 64, 64);
    const pearls = layout.map(([x, y, z, r], i) => {
      const mesh = new THREE.Mesh(sphere, material(finish.colors[i % finish.colors.length], finish.material));
      mesh.position.set(x, y, z);
      mesh.scale.setScalar(r);
      group.add(mesh);
      return { mesh, y };
    });
    return {
      object: group,
      update(t) {
        pearls.forEach(({ mesh, y }, i) => {
          mesh.position.y = y + Math.sin(t * 0.8 + i) * 0.08;
        });
      },
      upright: true,
    };
  },

  // balanced, stacked stones
  pebbles(THREE, material) {
    const group = new THREE.Group();
    const stones = [
      [1.25, 0.5, -1.15, PALETTE.plum], [1.0, 0.42, -0.35, PALETTE.mauve], [0.78, 0.36, 0.32, PALETTE.pink], [0.52, 0.3, 0.9, PALETTE.cream],
    ];
    const sphere = new THREE.SphereGeometry(1, 64, 48);
    stones.forEach(([w, h, y, color], i) => {
      const mesh = new THREE.Mesh(sphere, material(color, { roughness: 0.75 }));
      mesh.scale.set(w, h, w * 0.92);
      mesh.position.y = y;
      mesh.rotation.z = (i % 2 ? -1 : 1) * 0.06;
      group.add(mesh);
    });
    group.rotation.x = 0.25;
    return { object: group, update() {}, upright: true };
  },
};

export const shapeNames = Object.keys(shapes);

// A slowly turning 3D shape, built with Three.js. Three is loaded on demand so it
// doesn't slow down the first paint; if WebGL isn't available a soft gradient shows instead.
function HeroVisual({ shape = 'knot', variant }) {
  const container = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    Promise.all([import('three'), import('three/examples/jsm/environments/RoomEnvironment.js')]).then(([THREE, { RoomEnvironment }]) => {
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
      // soft studio reflections, which glossy and iridescent finishes need to shine
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environment = environment;
      scene.environmentIntensity = 0.3;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      camera.position.z = 8;

      const materials = [];
      const material = (color, overrides = {}) => {
        const m = new THREE.MeshPhysicalMaterial({
          color,
          roughness: 0.5,
          clearcoat: 0.4,
          clearcoatRoughness: 0.6,
          sheen: 1,
          sheenColor: new THREE.Color(PALETTE.cream),
          ...overrides,
        });
        materials.push(m);
        return m;
      };
      const { object, update, upright } = (shapes[shape] || shapes.knot)(THREE, material, variant);
      scene.add(object);

      scene.add(new THREE.HemisphereLight(0xfbf6f2, PALETTE.plum, 0.9));
      const key = new THREE.DirectionalLight(0xfff1ea, 1.8);
      key.position.set(3, 4, 5);
      scene.add(key);
      const rim = new THREE.DirectionalLight(PALETTE.mauve, 1.5);
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

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const baseX = object.rotation.x;
      let frame;
      const clock = new THREE.Clock();
      const render = () => {
        const t = clock.getElapsedTime();
        update(t);
        // stacked shapes stay upright and only turn; the rest tumble slowly
        const spinX = upright ? baseX : target.x + t * 0.12;
        object.rotation.x += (spinX + (upright ? target.x * 0.3 : 0) - object.rotation.x) * 0.05;
        object.rotation.y += (target.y + t * 0.18 - object.rotation.y) * 0.05;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(render);
      };
      if (reducedMotion) {
        update(0);
        object.rotation.y = 0.6;
        if (!upright) object.rotation.x = 0.4;
        renderer.render(scene, camera);
      } else {
        render();
      }

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener('pointermove', onPointer);
        object.traverse((child) => child.geometry?.dispose());
        materials.forEach((m) => m.dispose());
        environment.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => setFailed(true));

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [shape, variant]);

  return <div ref={container} className={failed ? 'hero_visual hero_visual-fallback' : 'hero_visual'} aria-hidden="true" />;
}

export default HeroVisual;
