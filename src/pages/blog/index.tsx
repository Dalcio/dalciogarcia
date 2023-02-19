import { Box, Stack, TextInput } from '@mantine/core';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { ArticleCard, ArticleCardProps } from 'components/Articles';
import { BiSearch } from 'react-icons/bi';
import { useBlogStyles } from 'views/blog/blog.styles';
import { BlogHeader } from 'views/blog/blog-header';
import { BlogProps } from 'views/blog/blog.types';
import { allArticles } from 'data';

export default function Blog({ articles }: BlogProps) {
  const { classes } = useBlogStyles();
  const [filteredArticles, setFilteredArticles] = useState<ArticleCardProps[]>([]);
  const items: ArticleCardProps[] = (filteredArticles.length && filteredArticles) || articles;

  const onSearching = (search: string) => {
    const tempArticles = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search.toLowerCase()) ||
        article.desc.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredArticles(tempArticles);
  };

  return (
    <Stack className={classes.root} spacing={0}>
      <BlogHeader className={classes.header}>
        <Box className={classes.searchInputContainer}>
          <div className="inner-root">
            <div className="inner-container">
              <TextInput
                my="md"
                onChange={(search) => onSearching(search.currentTarget.value)}
                icon={<BiSearch size={20} style={{ marginLeft: '5px' }} />}
                placeholder="Search for an article here"
                classNames={{ input: classes.searchInput }}
              />
            </div>
          </div>
        </Box>
      </BlogHeader>
      <div>
        <div className="inner-root">
          <Stack className="inner-container">
            <Stack mt="20px">
              {items.map((article) => (
                <ArticleCard key={article.link} {...article} />
              ))}
            </Stack>
          </Stack>
        </div>
      </div>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    articles: allArticles,
  },
});
