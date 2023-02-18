import { ArticleCardProps } from 'components/Articles';
import { ReactNode } from 'react';

export type BlogProps = {
  articles: ArticleCardProps[];
};

export type BlogHeaderProps = {
  className: string;
  children: ReactNode;
};
