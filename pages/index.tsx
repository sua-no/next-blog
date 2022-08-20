import type { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/post";
import { PostType } from "../types";
import styles from "../styles/Home.module.scss";
import { About, List, Seo } from "../components";

interface HomeProps {
  homePostData: Array<PostType>;
}

const Home = ({ homePostData }: HomeProps) => {
  return (
    <>
      <Seo title="Home" />
      <div>
        <section className={styles.section}>
          <About />
          <hr />
          <div>Last Posts</div>
          <ul>
            {homePostData.map((e) => {
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
  const homePostData = getSortedPostsData();
  return {
    props: {
      homePostData,
    },
  };
};
