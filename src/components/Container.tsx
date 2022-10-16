import { createStyles } from '@mantine/core';
import React from 'react';

type TLayout = {
  children: JSX.Element | JSX.Element[];
};

const useLayoutStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colors.bg[1],

    '& > .inner-root': {
      display: 'flex',
      justifyContent: 'center',
    },

    '& >.inner-root > .inner-container': {
      width: 'min(100%, 1240px)',
      padding: theme.spacing.xl,
    },
  },
}));

const Container = ({ children }: TLayout) => {
  const { classes } = useLayoutStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Container;
