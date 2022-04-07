import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/Seo';
import { getSortedPostsData } from '../lib/post';
import Logo from '../public/image/logo.png';
import { PostType } from '../types';

interface HomeProps {
  allPostsData: Array<PostType>;
}

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <>
      <Seo title="Home" />
      <style jsx>{style}</style>
      <div>
        <Link href={'/'}>
          <a>
            <h1 className="logo">
              <Image src={Logo} alt="logo" />
            </h1>
          </a>
        </Link>
        <section>
          <ul>
            {allPostsData.map(({ id, date, title, name }) => {
              return (
                <li key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>
                      <div className="title">{title}</div>
                      <div className="date">{date}</div>
                      <div className="name">{name}</div>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

const style = `
  .logo {
    text-align: center;
  }
  section {
    margin-top: 40px;
  }
  li {
    list-style: none;
    padding: 20px 0;
    border-bottom: 1px solid #efefef;
  }
  li:hover div {
    text-decoration: underline;
  }
  .title {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 8px;
  }
  .name {
    color: #ddd;
    margin-top: 8px;
  }`;
