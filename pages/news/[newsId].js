import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();
  const url = router.query.newsId;
  console.log(url);
  return <h1>This is Detail Page</h1>;
};

export default DetailPage;
