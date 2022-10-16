import { Box, Card, Image, Tabs, TabsProps, Text, Title } from '@mantine/core';

type ProjectCardProps = {
  desc: string;
  cover: string;
  url: string;
  name: string;
  className: string;
};

export const StyledTabs = (props: TabsProps) => (
  <Tabs
    unstyled
    styles={(theme) => ({
      tab: {
        ...theme.fn.focusStyles(),
        backgroundColor: '#F7F5F1',
        color: theme.black,
        padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
        cursor: 'pointer',
        fontSize: theme.fontSizes.md,
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.radius.xl,

        '&[data-active], &:hover': {
          transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
          backgroundColor: theme.colors.primary[0],
          color: theme.white,
        },
      },

      tabIcon: {
        marginRight: theme.spacing.xs,
        display: 'flex',
        alignItems: 'center',
      },

      tabsList: {
        display: 'flex',
        columnGap: theme.spacing.md,
      },
    })}
    {...props}
  />
);

export const ProjectCard = ({ cover, name, desc, url, className }: ProjectCardProps) => (
  <Card component="a" href={url} className={className} radius="md" p={0}>
    <Image src={cover} alt={name} width="100%" height="280px" />
    <Box className="hover" py="xl">
      <Title className="name">{name}</Title>
      <Text>{desc.substring(0, 30)}</Text>
    </Box>
  </Card>
);
