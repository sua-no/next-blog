import { PostType } from '../../types';
import { getAllPostIds, getPostData } from '../../lib/post';
import { Content, Seo } from '../../components';
import Comments from '../../components/Comments';

interface PostProps {
  postData: PostType;
}

const Post = ({ postData }: PostProps) => {
  return (
    <>
      <Seo title={postData.title ?? ''} />
      <Content {...postData} />
      <Comments />
    </>
  );
};

export default Post;

export const getStaticPaths = () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false, // paths로 전달 받은 외의 경로 404 에러. true면 fallback 페이지 전달
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
