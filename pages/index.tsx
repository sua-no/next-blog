import type { GetStaticProps } from "next";
import Link from "next/link";
import { getSortedPostsData } from "../lib/post";
import { PostType } from "../types";
import styles from "../styles/Home.module.scss";
import { List, Seo } from "../components";

interface HomeProps {
  allPostsData: Array<PostType>;
}

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <>
      <Seo title="Home" />
      <div>
        <Link href={"/"}>
          <a>
            <h1 className={styles.logo}>
              {/* <Image src={Logo} alt="logo" /> */}
            </h1>
          </a>
        </Link>
        <section className={styles.section}>
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
