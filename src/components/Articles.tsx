import { Grid, SimpleGrid } from '@mantine/core';
import { articles } from 'data';

type ArticleCardProps = {
  desc: string;
  link: string;
};

const ArticleCard = ({ desc, link }: ArticleCardProps) => <div>{desc}</div>;

const Articles = () => {
  const a = '';

  return (
    <div className="inner-root">
      <div className="inner-container">
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[
            {
              maxWidth: 'sm',
              cols: 1,
              spacing: 'md',
            },
          ]}
        >
          {articles.map((article) => (
            <ArticleCard desc={article.desc} link={article.link} key={article.link} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Articles;
