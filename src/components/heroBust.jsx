import { useEffect, useRef, useState } from 'react';

// A marble bust on a pedestal under a gallery light, turning slowly. This one is a stand-in built
// from simple shapes; a real scanned or sculpted bust (.glb) can replace it later.

// soft grey veins on white, for the marble
function marbleTexture(THREE) {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = 1024;
  const g = c.getContext('2d');
  g.fillStyle = '#f4f1ec';
  g.fillRect(0, 0, 1024, 1024);
  let seed = 7;
  const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  g.filter = 'blur(1.5px)';
  for (let i = 0; i < 26; i += 1) {
    g.strokeStyle = `rgba(150, 140, 132, ${0.12 + rand() * 0.25})`;
    g.lineWidth = 0.6 + rand() * 2.4;
    g.beginPath();
    let x = rand() * 1024;
    let y = rand() * 1024;
    g.moveTo(x, y);
    for (let k = 0; k < 6; k += 1) {
      const nx = x + (rand() - 0.3) * 260;
      const ny = y + (rand() - 0.5) * 200;
      g.quadraticCurveTo(x + (rand() - 0.5) * 120, y + (rand() - 0.5) * 120, nx, ny);
      x = nx;
      y = ny;
    }
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.RepeatWrapping;
  t.wrapT = THREE.RepeatWrapping;
  return t;
}

const lathe = (THREE, points, segments = 64) => new THREE.LatheGeometry(points.map(([x, y]) => new THREE.Vector2(x, y)), segments);

function HeroBust() {
  const container = useRef(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const element = container.current;
    let cleanup = () => {};
    let cancelled = false;

    import('three').then((THREE) => {
      if (cancelled) return;
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      element.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
      camera.position.set(0.9, 1.9, 13.5);
      camera.lookAt(0.9, 1.0, 0);

      // a gallery light from above, and a soft fill
      scene.add(new THREE.HemisphereLight('#fff8f2', '#d9c3c8', 1.3));
      const spot = new THREE.SpotLight('#fff3e6', 120, 30, 0.42, 0.7, 1.6);
      spot.position.set(-2.5, 9, 4);
      spot.target.position.set(0, 1.6, 0);
      spot.castShadow = true;
      spot.shadow.mapSize.set(1024, 1024);
      spot.shadow.radius = 4;
      scene.add(spot, spot.target);

      const marble = new THREE.MeshPhysicalMaterial({
        color: '#ffffff', map: marbleTexture(THREE), roughness: 0.32, clearcoat: 0.35, clearcoatRoughness: 0.4, sheen: 0.3, sheenColor: new THREE.Color('#fff1ea'),
      });
      const stone = new THREE.MeshStandardMaterial({ color: '#b7a99a', roughness: 0.85 });
      const add = (geometry, material, parent) => {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
      };

      // the pedestal stays still; the bust turns on it
      const pedestal = new THREE.Group();
      pedestal.position.x = -0.3;
      scene.add(pedestal);
      add(new THREE.BoxGeometry(2.4, 2.6, 2.4), stone, pedestal).position.y = -1.3;
      add(new THREE.BoxGeometry(2.6, 0.14, 2.6), stone, pedestal).position.y = 0.07;

      const bust = new THREE.Group();
      bust.position.set(-0.3, 0.14, 0);
      scene.add(bust);
      // a round socle, then the chest and shoulders, the neck and the head with a bun
      add(lathe(THREE, [[0, 0], [0.62, 0], [0.62, 0.08], [0.5, 0.14], [0.36, 0.3], [0.4, 0.38], [0, 0.38]]), marble, bust);
      const chest = add(lathe(THREE, [[0, 0.36], [0.42, 0.36], [0.72, 0.55], [0.9, 0.9], [0.88, 1.2], [0.66, 1.42], [0.3, 1.56], [0, 1.58]]), marble, bust);
      chest.scale.set(1.35, 1, 0.56);
      add(new THREE.CylinderGeometry(0.26, 0.32, 0.62, 32), marble, bust).position.set(0, 1.86, 0.02);
      const head = add(new THREE.SphereGeometry(0.56, 48, 32), marble, bust);
      head.scale.set(0.8, 1.12, 0.92);
      head.position.set(0, 2.42, 0.04);
      const bun = add(new THREE.SphereGeometry(0.28, 32, 24), marble, bust);
      bun.position.set(0, 2.72, -0.44);
      const hair = add(new THREE.SphereGeometry(0.58, 48, 32, 0, Math.PI * 2, 0, Math.PI / 1.9), marble, bust);
      hair.scale.set(0.9, 1.06, 1.0);
      hair.position.set(0, 2.47, -0.02);
      hair.rotation.x = -0.25;

      const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.ShadowMaterial({ opacity: 0.12 }));
      floor.rotation.x = -Math.PI / 2;
      floor.position.y = -2.6;
      floor.receiveShadow = true;
      scene.add(floor);

      const resize = () => {
        const { width, height } = element.getBoundingClientRect();
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const observer = new ResizeObserver(resize);
      observer.observe(element);
      resize();

      const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let frame = 0;
      const tick = (now) => {
        bust.rotation.y = still ? -0.4 : -0.4 + Math.sin(now / 5200) * 0.7;
        renderer.render(scene, camera);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);

      cleanup = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        renderer.dispose();
        renderer.domElement.remove();
      };
    }).catch(() => setFailed(true));

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return <div ref={container} className={failed ? 'hero_bust hero_bust-failed' : 'hero_bust'} role="img" aria-label="A marble bust on a pedestal" />;
}

export default HeroBust;
