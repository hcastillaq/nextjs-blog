import Head from 'next/head';

const Seo = () => {
  return (
    <Head>
      <title>Hernan Castilla</title>
      <meta
        name="description"
        content="Hola, mi nombre es Hernan Castilla y me dedico al desarrollo web, me encanta la música, las peliculas y el dibujo. 
      En este lugar podrás encontrar fragmentos de mi día a día, artículos sobre tecnologías y un poco sobre mí."
      />
      <meta
        name="keywords"
        content="hernan castilla, hcastillaq, blog, programacion,developer,programming, angular, react, nodejs, laravel, nextjs"
      />
      <meta name="author" content="hernan castilla" />
    </Head>
  );
};

export default Seo;
