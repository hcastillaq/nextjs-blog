import { createRef, FC, useEffect } from 'react';
import { starfieldEffect } from 'starfield-effect';
import styled from 'styled-components';

const StarsContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Stars: FC = () => {
  const container = createRef<HTMLDivElement>();
  useEffect(() => {
    const options = {
      parent: container.current as HTMLElement,
      numParticles: 1000,
      background: 'black',
      particleColor: '#ffffff63',
      maxParticleSize: 3, //optional
      fps: 30, //optional
      speed: 5, //optional
    };
    starfieldEffect(options);
  });
  return <StarsContainer ref={container} />;
};

export default Stars;
