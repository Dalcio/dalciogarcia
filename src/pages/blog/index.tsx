import { createStyles } from '@mantine/styles';
import { Stack, Text } from '@mantine/core';
import { GetStaticProps } from 'next';
import { ArticleCard, ArticleCardProps } from 'components/Articles';

type BlogProps = {
  articles: ArticleCardProps[];
};

type BlogHeaderProps = {
  className: string;
};

const BlogHeader = ({ className }: BlogHeaderProps) => (
  <Stack className={className}>
    <div className="inner-root">
      <div className="inner-container">
        <Text weight="bold" style={{ fontSize: '3.4rem' }} className="title">
          The best way to learn something is by teaching this thing
        </Text>
        <Text style={{ opacity: 0.8 }}>Dálcio Macuete Garcia</Text>
      </div>
    </div>
  </Stack>
);

const useBlogStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
    backgroundColor: '#F9F8FA',
    minHeight: '100vh',
    '> div:first-of-type': {
      background: theme.colors.bg[1],
      minHeight: '200px',
      color: theme.white,
    },
    '> div:last-of-type': {
      backgroundColor: '#F9F8FA',
      minHeight: '100%',
      flexGrow: 1,
    },
    'div > .inner-root': {
      display: 'flex',
      justifyContent: 'center',
    },

    'div >.inner-root > .inner-container': {
      width: 'min(100%, 750px)',
      padding: theme.spacing.xl,
    },
  },
  header: {
    '.title': {
      [theme.fn.smallerThan('lg')]: {
        fontSize: '2.4rem!important',
      },
    },
  },
}));

export default function Blog({ articles }: BlogProps) {
  const { classes } = useBlogStyles();

  return (
    <Stack className={classes.root} spacing={0}>
      <BlogHeader className={classes.header} />
      <div>
        <div className="inner-root">
          <Stack className="inner-container">
            {articles.map((article) => (
              <ArticleCard key={article.link} {...article} _noBlank />
            ))}
          </Stack>
        </div>
      </div>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const articles: ArticleCardProps[] = Array.from({ length: 20 }).map((v, idx) => ({
    date: new Date().toString(),
    desc: `Article ${idx}`,
    link: `/blog/article/${idx}`,
    title: `Article ${idx}`,
  }));

  return {
    props: {
      articles,
    },
  };
};
