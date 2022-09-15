import { createStyles, Stack } from '@mantine/core';
import React from 'react';

type TLayout = {
  children: JSX.Element[] | JSX.Element;
};

const useLayoutStyles = createStyles(() => ({
  root: {},
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
