import { createStyles } from '@mantine/core';

export const useArticlePageStyle = createStyles((theme) => ({
  root: {
    minHeight: '100vh',
    '.inner-root': {
      alignItems: 'center',
    },
    '.inner-root > .inner-container': {
      width: 'min(100%, 750px)',
      padding: theme.spacing.xl,
    },
  },
  body: {
    flexGrow: 1,
    color: 'black',
  },
  cover: {
    borderRadius: theme.radius.md,
    background: theme.colors.bg[0],
    height: 'max(50vh, 400px)',
    objectFit: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    color: 'white',
  },
  header: {},
}));
