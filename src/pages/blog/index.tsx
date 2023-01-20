import { GetStaticProps } from 'next';

type BlogProps = {
  articles: string[];
};

export default function Blog({ articles }: BlogProps) {
  return (
    <div>
      <h1>Hello to my Blogs</h1>

      {articles.map((article) => (
        <h3 key={article}>{article}</h3>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const articles = Array.of(17).map((v) => `Article ${v}`);

  return {
    props: {
      articles,
    },
  };
};
