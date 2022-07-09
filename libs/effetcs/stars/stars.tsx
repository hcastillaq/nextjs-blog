import p5 from 'p5';
import { useEffect, useRef } from 'react';
import { StarsConfig } from '../../interfaces/stars.interface';

class Particle {
  public x;
  public y;
  public dz;
  constructor(x: number, y: number, dz: number) {
    this.x = x;
    this.y = y;
    this.dz = dz;
  }

  setPosition(x: number, y: number, dz: number) {
    this.dz = dz;
    this.x = x;
    this.y = y;
  }

  update(speed: number) {
    this.dz -= speed;
    this.x += this.x / this.dz;
    this.y += this.y / this.dz;
  }
}

const Stars = (container: HTMLElement | null) => {
  let particles: Particle[] = [];
  let speed = 1;
  const maxParticles = 1000;
  let w = container?.offsetWidth || 0;
  let h = container?.offsetHeight || 0;
  const dzRandom = 1000;

  const sketch = (p5: p5) => {
    const createParticle = () => {
      const x = p5.random(-w, w);
      const y = p5.random(-h, h);
      const dz = p5.random(dzRandom);
      particles.push(new Particle(x, y, dz));
    };

    p5.setup = () => {
      if (container !== null) {
        p5.frameRate(30);
        const canvas = p5.createCanvas(w, h);
        canvas.parent(container);
        // for (let i = 0; i < maxParticles; i++) {}
      }
    };

    p5.draw = () => {
      p5.background(0, 60);
      p5.translate(w / 2, h / 2);

      if (particles.length < maxParticles) {
        createParticle();
      }
      particles.forEach((particle) => {
        if (particle.dz < 1) {
          const x = p5.random(-w, w);
          const y = p5.random(-h, h);
          const dz = p5.random(dzRandom);
          particle.setPosition(x, y, dz);
        } else {
          particle.update(speed);
          p5.stroke(255, 90);
          const r = p5.map(particle.dz, 0, w, 5, 0);
          p5.strokeWeight(r);
          p5.point(particle.x, particle.y);
        }
      });
    };

    p5.windowResized = () => {
      w = container?.offsetWidth || 0;
      h = container?.offsetHeight || 0;
      particles = [];
      p5.resizeCanvas(w, h);
    };
  };

  if (container) {
    new p5(sketch, container);
  }
};

const StarsComponent = () => {
  const container = useRef<any>(null);
  useEffect(() => {
    Stars(container.current);
  }, []);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '1',
      }}
      ref={container}
    ></div>
  );
};
export default StarsComponent;
