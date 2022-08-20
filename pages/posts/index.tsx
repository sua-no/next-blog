import { PostType } from "../../types";
import { getSortedPostsData } from "../../lib/post";
import { List, Seo } from "../../components";
import { GetStaticProps } from "next";

interface PostsProps {
  allPostData: Array<PostType>;
}

const Posts = ({ allPostData }: PostsProps) => {
  return (
    <>
      <Seo title="posts" />
      <section>
        <ul>
          {allPostData.map((e) => {
            return <List key={e.id} {...e} />;
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps = () => {
  const allPostData = getSortedPostsData(false);
  return {
    props: {
      allPostData,
    },
  };
};
