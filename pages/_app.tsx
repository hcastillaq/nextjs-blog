import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Container from '../components/shared/Containers/Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
