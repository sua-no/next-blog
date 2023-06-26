import { PostType } from '../../types';
import { getSortedPostsData } from '../../lib/post';
import { List, Seo } from '../../components';
import { GetStaticProps } from 'next';
import styles from '../../styles/Posts.module.scss';
import { useMemo } from 'react';

interface PostsProps {
  allPostData: Array<PostType>;
}

const HIDE_POSTS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '10',
    '12',
]

const Posts = ({ allPostData }: PostsProps) => {
const posts = useMemo(()=>allPostData.filter(({id}) =>
       !HIDE_POSTS.includes(id)
    ,[]),[allPostData])

  return (
    <>
      <Seo title="posts" />
      <section className={styles.root}>
        <ul>
          {posts.map((e) => {
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
