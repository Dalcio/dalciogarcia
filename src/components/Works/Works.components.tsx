import { Box, Card, Image, Text, Title, createStyles } from '@mantine/core';

type ProjectCardProps = {
  desc: string;
  cover: string;
  url: string;
  name: string;
  className?: string;
};

const useProjectCardStyles = createStyles((theme) => ({
  container: {
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

export const ProjectCard = ({ cover, name, desc, url, className }: ProjectCardProps) => {
  const { classes } = useProjectCardStyles();

  return (
    <Card
      component="a"
      href={url}
      className={`${classes.container} ${className}`}
      radius="md"
      p={0}
    >
      <Image src={cover} alt={name} width="100%" height="280px" />
      <Box className="hover" py="xl">
        <Title className="name">{name}</Title>
        <Text>{desc.substring(0, 30)}</Text>
      </Box>
    </Card>
  );
};
