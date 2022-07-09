import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  margin: 0px;
  padding: 0px;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    color: #00ffff;
    text-align: center;
    transition: font-weight 0.08s;
    @media (max-width: 700px) {
      font-size: 1rem;
    }
    &:hover {
      font-weight: 800;
    }
    &::after {
      content: '|';
      margin-left: 10px;
      color: white;
      font-weight: bold !important;
    }

    &:last-of-type {
      &::after {
        content: '';
      }
    }
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Home: NextPage = () => {
  const [client, setClient] = useState(false);
  const StarsComponent = dynamic(
    () => import('./../libs/effetcs/stars/stars'),
    {
      ssr: false,
    }
  );
  useEffect(() => {
    setClient(true);
  }, []);
  return (
    <>
      {/* <StarsComponent /> */}

      <div style={{ zIndex: 2, position: 'relative' }}>
        <div
          style={{
            marginTop: '60px',
            fontSize: '1.2rem',
            color: '#c7c7c7',
          }}
        >
          <q>
            Pero compartir no es inmoral –es un imperativo moral. Sólo aquellos
            que están cegados por la codicia se negarían a hacerle una copia a
            un amigo.
          </q>
          <div style={{ marginTop: '10px' }}> - Aaron Swartz</div>
        </div>
        <Name>Hernan Castilla</Name>
        <Description>
          Hola, soy ing de sistemas y me dedico al desarrollo web, me
          especializo en frontend, pero tengo conocimientos básicos de backend,
          me encanta todo lo que esté relacionado con el desarrollo, amo ver
          películas y me gusta el arte.
        </Description>

        <div style={{ marginTop: '60px' }}>
          <SocialList>
            <li>CV</li>
            <li>Linkedin</li>
            <li>Instagram</li>
            <li>Medium</li>
          </SocialList>
        </div>

        <div style={{ margin: '50px 0px' }}>
          <h2 style={{ color: '#00ffff', fontSize: '2rem' }}>Experimentos</h2>
        </div>
      </div>
    </>
  );
};

export default Home;
