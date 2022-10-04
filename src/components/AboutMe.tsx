import { createStyles } from '@mantine/core';

const useAboutMeStyles = createStyles(() => ({
  container: {
    minHeight: '100vh',
  },
}));
const AboutMe = () => {
  const { classes } = useAboutMeStyles();

  return (
    <div className={classes.container}>
      A<h1>About Me</h1>
    </div>
  );
};

export default AboutMe;
