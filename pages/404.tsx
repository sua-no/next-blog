import { NotFound, Seo } from '../components';

const NotFoundPage = () => {
  return (
    <>
      <Seo title={'404'} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
