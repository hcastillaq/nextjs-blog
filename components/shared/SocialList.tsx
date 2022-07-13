import Link from 'next/link';
import styled from 'styled-components';

const Ul = styled.ul`
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
    color: var(--cyan);
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

const data = [
  {
    name: 'CV',
    url: '/cv.pdf',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/hcastillaq/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hcastillaq/',
  },
  {
    name: 'medium',
    url: 'https://hcastillaq.medium.com/',
  },
];

const SocialList = () => {
  return (
    <div style={{ marginTop: '60px' }}>
      <Ul>
        {data.map((obj, index) => {
          return (
            <Link passHref href={obj.url} key={index}>
              <a target="_blank">
                <li>{obj.name}</li>
              </a>
            </Link>
          );
        })}
      </Ul>
    </div>
  );
};

export default SocialList;
