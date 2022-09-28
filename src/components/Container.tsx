import { createStyles, Stack } from '@mantine/core';
import React from 'react';

type TLayout = {
  children: JSX.Element[] | JSX.Element;
};

const useLayoutStyles = createStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '100vh',
    position: 'relative',
    zIndex: 1,
  },
}));

const Layout = ({ children }: TLayout) => {
  const { classes } = useLayoutStyles();

  return (
    <div className={classes.root}>
      <Stack>{children}</Stack>
    </div>
  );
};

export default Layout;
