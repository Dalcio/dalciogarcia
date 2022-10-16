import { Box, Button, Card, createStyles, Image, SimpleGrid, Stack, Tabs } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { content } from 'data';
import SectionTitle from '../SecrionTitle';
import { ProjectCard, StyledTabs } from './Works.components';
import { useWorks } from './Works.hooks';

const useWorksStyles = createStyles((theme) => ({
  root: {
    '& > .inner-container': {
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
    },
  },
  button: {
    backgroundColor: theme.colors.primary[0],
    marginBottom: 4 * theme.spacing.xl,

    '&:hover': {
      backgroundColor: theme.colors.primary[0],
      opacity: 0.8,
    },
  },
  projects: {
    overflow: 'auto',
    height: '55vh',
  },
  projectCard: {
    position: 'relative',
    border: '1px solid transparent',
    height: '280px',

    img: {
      transition: 'transform 400ms ease-in-out',
      objectFit: 'cover',
    },

    '.hover': {
      display: 'none',
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.8)',
      transition: 'display 200ms ease-in-out',
    },

    ':hover': {
      borderColor: theme.colors.primary[0],

      img: {
        transform: 'scale(1.3)',
      },

      '.hover': {
        display: 'flex',
        justifyContent: 'center',
        rowGap: theme.spacing.md,
        flexDirection: 'column',
        padding: theme.spacing.xl,
        textAlign: 'left',

        '.name': {
          color: theme.colors.primary[0],
        },
      },
    },
  },
}));

const WorksSection = () => {
  const { classes } = useWorksStyles();
  const { works, handleWorks } = useWorks();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className="inner-container ">
        <SectionTitle title="My Works" />
        <Stack align="center" mb="lg">
          <StyledTabs onTabChange={handleWorks} defaultValue="all">
            <Tabs.List>
              <Tabs.Tab value="all">All</Tabs.Tab>
              <Tabs.Tab value="web">Web</Tabs.Tab>
              <Tabs.Tab value="mobile">Mobile</Tabs.Tab>
              <Tabs.Tab value="others">Others</Tabs.Tab>
            </Tabs.List>
          </StyledTabs>
        </Stack>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            {
              maxWidth: 'sm',
              cols: 1,
              spacing: 'md',
            },
          ]}
          className={classes.projects}
          my="md"
          px="md"
        >
          {works.map((project) => (
            <ProjectCard
              className={classes.projectCard}
              desc={project.desc}
              url={project.live}
              name={project.name}
              cover={project.cover}
              key={project.id}
            />
          ))}
        </SimpleGrid>
        <Button
          component="a"
          href={content.contacts.github}
          target="_blank"
          fullWidth
          radius="md"
          size="xl"
          rightIcon={<GitHubLogoIcon />}
          className={classes.button}
          mt="md"
        >
          See more on Github
        </Button>
      </div>
    </div>
  );
};

export default WorksSection;
