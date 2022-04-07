import Link from 'next/link';
import Image from 'next/image';
import Seo from '../../components/Seo';

import Home from '../../public/image/home.svg';
import { PostType } from '../../types';
import { getAllPostIds, getPostData } from '../../lib/post';
import { GetStaticProps } from 'next';

interface PostProps {
  postData: PostType;
}

const Post = ({ postData }: PostProps) => {
  return (
    <>
      <Seo title={postData.title ?? ''} />
      <style jsx>{style}</style>
      <Link href="/">
        <a>
          <div className="go-home">
            <Image src={Home} alt="home" />
            <span>Tech-Blog</span>
          </div>
        </a>
      </Link>
      <section>
        <div className="title">{postData.title}</div>
        <div className="date">{postData.date}</div>
        <a href={`https://github.com/${postData.name}`}>
          <div className="name">{postData.name}</div>
        </a>
        <hr />
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? '' }} />
      </section>
    </>
  );
};

export default Post;

// 동적라우팅 + getStaticProps를 원할 때
// getStaticPaths을 통해 빌드 타임 때 정적으로 렌더링할 경로를 설정
export const getStaticPaths = () => {
  const paths = getAllPostIds();
  //  [
  //    { params: { id: 'hello-next' } },
  //    { params: { id: 'second-post' } },
  //    { params: { id: 'third-post' } },
  //  ];
  return {
    paths,
    fallback: false, // paths로 전달 받은 외의 경로 404 에러. true면 fallback 페이지 전달
  };
};

export const getStaticProps = async ({ params }: { params: { id: string } }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

const style = `
  .go-home {
    display: flex;
    align-items: center;
    margin: 40px 0;
  }
  .go-home span {
    margin-left: 8px;
    color: #4048E2;
    line-height: 26px;
    font-weight: bold;
  }
  .title {
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 8px;
  }
  .name {
    color: #ddd;
    margin-top: 8px;
  }
  .name:hover {
    text-decoration: underline;
  }
`;
