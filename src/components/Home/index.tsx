import { createStyles, Image, keyframes, Stack, Text, Title } from '@mantine/core';
import { content } from 'data';
import { Row } from 'theme/restyled';
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
  wrapper: {
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
  },
  intro: {
    width: '400px',
    textAlign: 'center',
  },
  vscode: {
    width: `min(calc(100% - ${0 * theme.spacing.lg}px), 760px)`,

    [theme.fn.smallerThan('sm')]: {
      position: 'absolute',
      bottom: '-200px',
    },
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
}));

const Home = () => {
  const { classes } = useCoverStyles();

  return (
    <div className={classes.wrapper}>
      <Image src="/images/stars.jpg" alt="universe" className={classes.bg} />
      <Stack className={classes.container}>
        <DalcioCharacter />
        <Title>Dálcio Garcia</Title>
        <Text className={classes.intro}>{content.home.intro}</Text>
        <Row justify="space-around">
          <a href={content.contacts.github} target="_blank" rel="noreferrer">
            Git
          </a>
          <a href={content.contacts.linkedin} target="_blank" rel="noreferrer">
            li
          </a>
        </Row>
        <VSCode className={classes.vscode} />
      </Stack>
    </div>
  );
};

export default Home;
