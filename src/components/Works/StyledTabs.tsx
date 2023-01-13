import { Tabs, TabsProps } from '@mantine/core';


export function StyledTabs(props: TabsProps) {
  return (
    <Tabs
      unstyled
      styles={(theme) => ({
        tab: {
          ...theme.fn.focusStyles(),
          border: 'none!important',
          backgroundColor: '#F7F5F1',
          color: theme.black,
          padding: `${theme.spacing.sm}px ${theme.spacing.xl}px`,
          cursor: 'pointer',
          fontSize: theme.fontSizes.md,
          display: 'flex',
          alignItems: 'center',
          borderRadius: theme.radius.xl,

          '&:not(:first-of-type)': {
            marginLeft: theme.spacing.md,
          },

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
          overflowX: 'auto',
          margin: '0 auto',
          borderRadius: theme.radius.xl,
          columnGap: theme.spacing.md,

          [theme.fn.smallerThan('sm')]: {
            width: `min(calc(100% - ${6 * theme.spacing.lg}px), 760px)`,
          },

          '&::-webkit-scrollbar': {
            width: '0px',
            height: '0px',
          },
        },
      })}
      {...props} />
  );
}
