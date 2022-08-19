import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { List } from '../components/List';
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
            <h1 className="logo">{/* <Image src={Logo} alt="logo" /> */}</h1>
          </a>
        </Link>
        <section>
          <ul>
            {allPostsData.map((e) => {
              return <List key={e.id} {...e} />;
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
  `;
