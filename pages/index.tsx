import type { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import { PostType } from "../types";
import styles from "../styles/Home.module.scss";
import { About, List, Seo } from "../components";
import Link from "next/link";

interface HomeProps {
  homePostData: Array<PostType>;
}

const Home = ({ homePostData }: HomeProps) => {
  return (
    <>
      <Seo title="Home" />
      <div>
        <section>
          <About />
          <div className={styles.posts}>
            <div>
              <h2>Lastest Posts</h2>
              <Link href="/posts">Read all posts</Link>
            </div>
            <ul>
              {homePostData.map((e) => {
                return <List key={e.id} {...e} />;
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = () => {
  const homePostData = getSortedPostsData();
  return {
    props: {
      homePostData,
    },
  };
};
