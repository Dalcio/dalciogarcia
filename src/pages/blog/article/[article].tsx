import { GetServerSideProps } from 'next';

type ArticleProps = {
  article: {
    name: string;
  };
};

export default function Article({ article }: ArticleProps) {
  return (
    <div>
      <h1>Article</h1>
      <h3>name: {article}</h3>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { article: id } = query;

  const article = {
    name: id,
  };

  return {
    props: { article },
  };
};
