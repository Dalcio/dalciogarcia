import { createStyles } from '@mantine/core';

const useCoverStyles = createStyles((theme) => ({
  container: {
    position: 'fixed',
    height: '100vh',
    top: 0,
    right: 0,
    width: '100vw',
    backgroundColor: theme.colors.blue[0],
    zIndex: 1,
  },
}));

const Home = () => {
  const { classes } = useCoverStyles();

  return <div className={classes.container}>Cover Section</div>;
};

export default Home;
