import { createStyles, Stack } from '@mantine/core';
import React from 'react';

type TLayout = {
  children: JSX.Element[] | JSX.Element;
};

const useLayoutStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '100vh',
    position: 'relative',
    zIndex: 1,
    backgroundColor: theme.colors.bg[1],
  },
  container: {
    width: 'min(100%, 1240px)',
  },
}));

const Container = ({ children }: TLayout) => {
  const { classes } = useLayoutStyles();

  return (
    <div className={classes.root}>
      <Stack className={classes.container}>{children}</Stack>
    </div>
  );
};

export default Container;
