import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Articles from '../components/Articles';
import Experiments from '../components/Experiments';
import Seo from '../components/shared/Seo';
import SocialList from '../components/shared/SocialList';

const Name = styled.h1`
  font-size: 6rem;
  font-weight: 800;
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

const Stars = dynamic(() => import('./../components/shared/Stars'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <Stars />

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

        <div style={{ marginBottom: '100px' }}>
          <SocialList />
          <Experiments />
          <Articles />
        </div>
      </div>
    </>
  );
};

export default Home;
