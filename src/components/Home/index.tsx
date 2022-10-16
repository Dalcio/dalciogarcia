import { createStyles, Stack, Text, Title } from '@mantine/core';
import { content } from 'data';
import DalcioCharacter from './DalcioCharacter';
import VSCode from './VSCode';

const useCoverStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4 * theme.spacing.xl,
    position: 'relative',
  },
  container: {
    width: 'min(100%, 1240px)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    marginBottom: '480px',
  },
  intro: {
    width: `min(calc(100% - ${2 * theme.spacing.lg}px), 400px)`,
    textAlign: 'center',
  },
  vscodeContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.white,
    left: '-20vw',
    right: '-20vw',
    height: '270px',
    borderTopLeftRadius: '30%',
    borderTopRightRadius: '30%',
  },
  vscode: {
    position: 'relative',
    top: '-170px',
    margin: '0 auto',
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
      <Stack className={`inner-container ${classes.container}`}>
        <DalcioCharacter />
        <Title>Dálcio Garcia</Title>
        <Text className={classes.intro}>{content.home.intro}</Text>
      </Stack>
      <div className={classes.vscodeContainer}>
        <VSCode className={classes.vscode} />
      </div>
    </div>
  );
};

export default Home;
