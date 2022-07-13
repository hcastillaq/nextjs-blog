import Link from 'next/link';
import { db_articles } from '../db/articles';

const Articles = () => {
  return (
    <>
      <div style={{ margin: '50px 0px' }}>
        <h2 style={{ color: 'var(--cyan)', fontSize: '2rem' }}>
          Publicaciones
        </h2>
      </div>
      <ul>
        {db_articles.map((obj, index) => {
          return (
            <li key={index} style={{ marginBottom: '40px' }}>
              <Link passHref href={obj.url || '/'}>
                <a target="_blank">
                  <div>
                    <h3
                      style={{
                        fontSize: '1.5rem',
                        margin: '0px',
                        padding: '0px',
                      }}
                    >
                      <strong>{obj.title}</strong>
                    </h3>
                  </div>

                  <div>
                    <p style={{ fontSize: '1.2rem', margin: '20px 10px' }}>
                      {obj.description}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Articles;
