import { createStyles, Stack } from '@mantine/core';
import SectionTitle from '../SecrionTitle';

const useAboutMeStyles = createStyles((theme) => ({
  root: {
    background: theme.white,
    color: theme.black,
  },
  container: {
    position: 'relative',
    paddingBottom: 4 * theme.spacing.xl,
  },
  imageContainer: {
    // position: 'absolute',
    // height: '100vh!important',
    right: 0,
    // overflow: 'hidden',

    [theme.fn.smallerThan('sm')]: {
      // borderRadius: '100%!important',
    },
  },
  aboutContainer: {
    width: '100%',
  },
  tabsContainer: {
    flexGrow: 1,
  },
  tabPanel: {
    // height: '100%',
  },
}));

const AboutMe = () => {
  const { classes } = useAboutMeStyles();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className={`inner-container ${classes.container}`}>
        <SectionTitle title="About Me" />
        {/* <div className="title">
          <Title>Dálcio Garcia</Title>
        </div>
        <Row align="center" className="contacts">
          <SocialNetWorks />
          <LetsTalk />
        </Row> */}
        <Stack className={classes.aboutContainer}>
          {/*
          <Tabs defaultValue="about" className={classes.tabsContainer}>
            <Tabs.List>
              <Tabs.Tab value="about">Dálcio Garcia</Tabs.Tab>
              <Tabs.Tab value="tec">Technologies</Tabs.Tab>
              <Tabs.Tab value="works">Works</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="about" className={classes.tabPanel}>
              Something about Dálcio
            </Tabs.Panel>

            <Tabs.Panel value="tec" className={classes.tabPanel}>
              Technologies that I use
            </Tabs.Panel>

            <Tabs.Panel value="works" className={classes.tabPanel}>
              Where I&apos;ve worked
            </Tabs.Panel>
          </Tabs>
        */}
        </Stack>
      </div>
    </div>
  );
};

AboutMe.bg = 'white';

export default AboutMe;
