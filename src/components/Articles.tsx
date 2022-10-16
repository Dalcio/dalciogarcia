import { Box, createStyles, SimpleGrid, Text } from '@mantine/core';
import { articles } from 'data';
import SectionTitle from './SectionTitle';

type ArticleCardProps = {
  desc: string;
  title: string;
  date: string;
  link: string;
  className: string;
};

const useArticlesStyles = createStyles((theme) => ({
  root: {
    background: theme.white,
    paddingBottom: 4 * theme.spacing.xl,
    color: theme.black,
  },
  articleCard: {
    padding: theme.spacing.lg,
    borderRadius: theme.radius.md,
    boxShadow: '0px -1px 30px rgb(0 0 0 / 10%)',
    position: 'relative',

    '& > div:first-of-type': {
      color: theme.black,
      fontWeight: 700,
    },

    '& > div:nth-of-type(2)': {
      color: theme.colors.primary[0],
      fontWeight: 700,
    },

    '& > div:last-of-type': {
      color: '#8b949e',
    },

    footer: {
      height: '2px',
      backgroundColor: theme.colors.primary[0],
      position: 'absolute',
      bottom: 0,
      right: theme.spacing.xl,
      left: theme.spacing.xl,
      transition: 'left 200ms ease-in-out, right 200ms ease-in-out',
    },

    '&:hover': {
      cursor: 'pointer',
      borderColor: theme.colors.primary[0],

      '& > div:first-of-type': {
        color: theme.colors.primary[0],
        fontWeight: 700,
      },

      footer: {
        left: 0,
        right: 0,
      },
    },
  },
}));

const ArticleCard = ({ desc, date, title, link, className }: ArticleCardProps) => (
  <Box component="a" href={link} className={className} target="_blank">
    <Text>{date}</Text>
    <Text size="lg">{title}</Text>
    <div>{desc}</div>
    <footer />
  </Box>
);

const Articles = () => {
  const { classes } = useArticlesStyles();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className="inner-container">
        <SectionTitle title="My Articles" />
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
            <ArticleCard
              title={article.name}
              date={article.date}
              desc={article.desc}
              link={article.link}
              key={article.link}
              className={classes.articleCard}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Articles;
