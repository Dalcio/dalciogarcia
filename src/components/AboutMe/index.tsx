import { Button, createStyles, SimpleGrid, Stack, Text } from '@mantine/core';
import { GlobeIcon } from '@modulz/radix-icons';
import { content } from 'data';
import {
  SiAdobexd,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiFigma,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import { AboutMeComponent, MobileIcon, AboutMeCard } from './AboutMe.components';

const useAboutMeStyles = createStyles((theme) => ({
  root: {
    background: theme.white,
    color: theme.black,
    paddingBottom: 4 * theme.spacing.xl,

    '&:first-of-type': {
      '.section-title': {
        paddingTop: '0px!important',
      },
    },

    '&:nth-of-type(2)': {
      backgroundColor: 'transparent',
      color: theme.white,

      '.about-me-card': {
        backgroundColor: theme.white,
      },
    },
  },
  container: {
    position: 'relative',
    paddingBottom: 4 * theme.spacing.xl,

    '.self-intro': {
      width: `min(calc(100% - ${2 * theme.spacing.lg}px), 400px)`,
    },
  },
  button: {
    backgroundColor: theme.colors.primary[0],

    '&:hover': {
      backgroundColor: theme.colors.primary[0],
      opacity: 0.8,
    },
  },
  aboutContainer: {
    width: '100%',
  },
}));

const AboutMe = () => {
  const { classes } = useAboutMeStyles();

  return (
    <>
      <AboutMeComponent
        innerRootClass={classes.root}
        innerContainerClass={classes.container}
        title="About Me"
        titleDesc={
          <Text align="center" className="self-intro">
            <strong>I am Dálcio Garcia</strong> a{content['about-me'].description}
          </Text>
        }
      >
        <Stack align="center">
          <Button
            className={classes.button}
            component="a"
            download
            href="/dalcio.pdf"
            target="_blank"
            radius="xl"
            size="xl"
          >
            My Resume
          </Button>
        </Stack>
      </AboutMeComponent>

      <AboutMeComponent
        innerRootClass={classes.root}
        innerContainerClass={classes.container}
        title="Common Techs"
        titleDesc={
          <Text align="center" className="self-intro">
            {content['about-me']['my-techs']}
          </Text>
        }
      >
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 'sm', cols: 2, spacing: 'md' },
            { maxWidth: 'md', cols: 3, spacing: 'md' },
          ]}
          my="md"
          px="md"
        >
          <AboutMeCard icon={<SiHtml5 size={26} />} name="HTML 5" />
          <AboutMeCard icon={<SiCss3 size={26} />} name="CSS 3" />
          <AboutMeCard icon={<SiSass size={26} />} name="Sass" />
          <AboutMeCard icon={<SiJavascript size={26} />} name="Javascript" />
          <AboutMeCard icon={<SiTypescript size={26} />} name="Typescript" />
          <AboutMeCard icon={<SiNodedotjs size={26} />} name="Node JS" />
          <AboutMeCard icon={<SiReact size={26} />} name="React JS" />
          <AboutMeCard icon={<SiNextdotjs size={26} />} name="Next Js" />
          <AboutMeCard icon={<SiReact size={26} />} name="React Native / Expo" />
          <AboutMeCard icon={<ImGit size={26} />} name="Git" />
          <AboutMeCard icon={<SiFigma size={26} />} name="Figma" />
          <AboutMeCard icon={<SiAdobexd size={26} />} name="Adobe XD" />
        </SimpleGrid>
      </AboutMeComponent>

      <AboutMeComponent
        innerRootClass={classes.root}
        innerContainerClass={classes.container}
        title="My Services"
      >
        <SimpleGrid
          cols={2}
          spacing="lg"
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 'md' }]}
          my="md"
          px="md"
        >
          <AboutMeCard
            icon={<GlobeIcon width="24px" height="24px" />}
            name="Web Development"
            desc="I use develop web applications thinking in the UI/UX bringing awesome solutions"
          />
          <AboutMeCard
            icon={<MobileIcon />}
            name="Mobile Development"
            desc="I use to create cross platform mobile"
          />
        </SimpleGrid>
      </AboutMeComponent>
    </>
  );
};

AboutMe.bg = 'white';

export default AboutMe;
