import { createStyles, Image, keyframes, Stack, Text, Title } from '@mantine/core';
import { content } from 'data';
import DalcioCharacter from './DalcioCharacter';
import VSCode from './VSCode';

const universe = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(4)',
  },
});

const useCoverStyles = createStyles((theme) => ({
  root: {
    position: 'fixed',
    height: '100vh',
    top: 0,
    right: 0,
    width: '100vw',
    background: theme.colors.bg[0],
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.md,
  },
  container: {
    width: 'min(100%, 1240px)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1,

    '@media screen and (max-height: 800px)': {
      marginBottom: `calc(18vh + ${theme.spacing.lg}px)`,
    },
  },
  intro: {
    width: `min(calc(100% - ${2 * theme.spacing.lg}px), 400px)`,
    textAlign: 'center',
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    objectFit: 'cover',
    opacity: 0.2,
    animation: `${universe} 30s ease-in-out infinite alternate`,
  },
  vscodeContainer: {
    backgroundColor: theme.white,
    position: 'fixed',
    bottom: 0,
    height: '20vh',
    right: '-10vw',
    left: '-10vw',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',

    [theme.fn.smallerThan('sm')]: {
      height: '16vh',
    },
  },
  vscode: {
    width: `min(calc(100% - ${2 * theme.spacing.lg}px), 760px)`,

    [theme.fn.smallerThan('sm')]: {
      transform: 'scale(0.8)',
    },
  },
}));

const Home = () => {
  const { classes } = useCoverStyles();

  return (
    <div className={classes.root}>
      <Image src="/images/stars.jpg" alt="universe" className={classes.bg} />
      <Stack className={classes.container}>
        <DalcioCharacter />
        <Title>Dálcio Garcia</Title>
        <Text className={classes.intro}>{content.home.intro}</Text>
        <div className={classes.vscodeContainer}>
          <VSCode className={classes.vscode} />
        </div>
      </Stack>
    </div>
  );
};

export default Home;
