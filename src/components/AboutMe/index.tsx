import { createStyles, SimpleGrid, Stack, Text } from '@mantine/core';
import { GlobeIcon } from '@modulz/radix-icons';
import { content } from 'data';
import {
  SiAdobexd,
  SiGooglescholar,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiFigma,
  SiVisualstudiocode,
} from 'react-icons/si';
import { ImGit } from 'react-icons/im';
import { ArticleCard } from 'components/Articles';
import { Row } from 'theme/restyled';
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
  imageContainer: {},
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
            I&asp;m <strong>I am Dálcio Garcia</strong>
            {content['about-me'].description}
          </Text>
        }
      >
        <Stack align="start">
          <ArticleCard
            row={
              <Row>
                <SiGooglescholar width="24px" height="24px" />
                <Text>Education</Text>
              </Row>
            }
            date={content['about-me'].education.date}
            link={content['about-me'].education.link}
            title={content['about-me'].education.institute}
            desc={content['about-me'].education.course}
          />
        </Stack>
      </AboutMeComponent>

      <AboutMeComponent
        innerRootClass={classes.root}
        innerContainerClass={classes.container}
        title="Most Used Technologies"
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
            { maxWidth: 'sm', cols: 1, spacing: 'md' },
            { maxWidth: 'md', cols: 2, spacing: 'md' },
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
          <AboutMeCard icon={<ImGit size={26} />} name="Git" />
          <AboutMeCard icon={<SiVisualstudiocode size={26} />} name="VS Code" />
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
            desc=""
          />
          <AboutMeCard icon={<MobileIcon />} name="Mobile Development" desc="" />
        </SimpleGrid>
      </AboutMeComponent>
    </>
  );
};

AboutMe.bg = 'white';

export default AboutMe;
