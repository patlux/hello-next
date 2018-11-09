import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import MyLayout from '../components/MyLayout';

const PostLink = ({ id, title }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = ({ shows }) => (
  <MyLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map(({ show, score }) => (
        <PostLink key={show.id} id={show.id} title={show.name} />
      ))}
    </ul>
  </MyLayout>
);

Index.getInitialProps = async function() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await response.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data,
  };
};

export default Index;
