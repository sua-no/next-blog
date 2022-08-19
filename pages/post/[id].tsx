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
          </div>
        </a>
      </Link>
      <section>
        <div className="title">{postData.title}</div>
        <div className="date">
          {postData.date} — {postData.tag}
        </div>
        <br />
        <hr />
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
  section {
    padding-bottom: 200px;
  }
  .go-home {
    display: flex;
    align-items: center;
    margin: 40px 0;
  }
  .title {
    font-weight: 700;
    line-height: 1.25;
    font-size: 4rem;
    margin-bottom: 8px;
    color: #fff;
  }
  .date {
    font-size: 1.25rem;
    color: #7f8ea3;
  }
  h2 {
    margin-top: 50px;
  }
  h3 {
    margin-top: 35px;
  }
  ul {
    padding-left: 24px;
  }
  li {
    margin-bottom: 10px;
  }
  blockquote {
    position: relative;
    margin: 0;
    margin-left: 20px;
    padding-left: 10px;
  }
  blockquote:after {
    position: absolute;
    display: block;
    content: '';
    width: 3px;
    height: 100%;
    background: #ddd;
    left: 0;
    top: 0;
  }
  pre {
    padding: 34px;
    background: rgb(1, 22, 39);
  }
  code {
    font-family: 'Source Code Pro', monospace;
    font-size: 14px;
    color: rgb(214, 222, 235);
  }
`;
