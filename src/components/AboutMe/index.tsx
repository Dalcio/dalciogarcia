import { createStyles, Stack, Text } from '@mantine/core';
import { content } from 'data';
import SectionTitle from '../SectionTitle';

const useAboutMeStyles = createStyles((theme) => ({
  root: {
    background: theme.white,
    color: theme.black,

    '.section-title': {
      paddingTop: '0px!important',
    },
  },
  container: {
    position: 'relative',
    paddingBottom: 4 * theme.spacing.xl,

    '.self-intro': {
      width: `min(calc(100% - ${2 * theme.spacing.lg}px), 400px)`,
    },
  },
  imageContainer: {},
  aboutContainer: {
    width: '100%',
  },
}));

const AboutMe = () => {
  const { classes } = useAboutMeStyles();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className={`inner-container ${classes.container}`}>
        <SectionTitle
          title="About Me"
          desc={
            <Text align="center" className="self-intro">
              I&asp;m <strong>I am Dálcio Garcia</strong>
              {content['about-me'].description}
            </Text>
          }
        />
        {/* <div className="title">
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
