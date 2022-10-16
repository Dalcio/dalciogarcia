import { Box, Card, createStyles, Image, SimpleGrid, Text, Title } from '@mantine/core';
import { projects } from 'data';
import SectionTitle from './SecrionTitle';

const useWorksStyles = createStyles((theme) => ({
  root: {
    paddingBottom: 4 * theme.spacing.xl,
    height: '100vh|important',
    overflow: 'auto',
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

type ProjectCardProps = {
  desc: string;
  cover: string;
  url: string;
  name: string;
};

const ProjectCard = ({ cover, name, desc, url }: ProjectCardProps) => {
  const { classes } = useWorksStyles();

  return (
    <Card component="a" href={url} className={classes.projectCard} radius="md" p={0}>
      <Image src={cover} alt={name} width="100%" height="280px" />
      <Box className="hover" py="xl">
        <Title className="name">{name}</Title>
        <Text>{desc.substring(0, 30)}</Text>
      </Box>
    </Card>
  );
};

const WorksSection = () => {
  const { classes } = useWorksStyles();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className="inner-container ">
        <SectionTitle title="My Works" />
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
        >
          {projects.map((project) => (
            <ProjectCard
              desc={project.desc}
              url={project.live}
              name={project.name}
              cover={project.cover}
              key={project.id}
            />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default WorksSection;
