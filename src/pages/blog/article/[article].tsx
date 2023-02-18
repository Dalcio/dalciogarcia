import { Stack } from '@mantine/core';
// import RichTextEditor from 'components/RichTextEditor';
import { GetServerSideProps } from 'next';
import { ArticleHeader } from 'views/blog/article/article-header';
import { useArticlePageStyle } from 'views/blog/article/article.styles';
import ReactMarkdown from 'react-markdown';

type ArticleProps = {
  article: {
    content: string;
    title: string;
  };
};

export default function Article({ article }: ArticleProps) {
  const { classes } = useArticlePageStyle();

  return (
    <Stack className={classes.root}>
      <ArticleHeader className={classes.header} />
      <Stack className="inner-root" style={{ background: 'white', flexGrow: 1 }}>
        <Stack className={`inner-container ${classes.body}`} px="0!important">
          <Stack className={classes.cover}>{article.title}</Stack>
          <Stack px="md">
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { article: id } = query;

  const article = {
    title: 'article title',
    content: 'A paragraph with *emphasis* and **strong importance**.',
  };

  return {
    props: { article },
  };
};
