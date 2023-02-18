import { createStyles } from '@mantine/core';

export const useBlogStyles = createStyles((theme) => ({
  root: {
    color: theme.black,
    backgroundColor: '#F9F8FA',
    minHeight: '100vh',
    '> div:first-of-type': {
      background: theme.colors.bg[1],
      minHeight: '200px',
      color: theme.white,
    },
    '> div:last-of-type': {
      backgroundColor: '#F9F8FA',
      minHeight: '100%',
      flexGrow: 1,
    },
    'div > .inner-root': {
      display: 'flex',
      justifyContent: 'center',
    },

    'div >.inner-root > .inner-container': {
      width: 'min(100%, 750px)',
      padding: theme.spacing.xl,
    },
  },
  header: {
    position: 'relative',
    backgroundColor: `${theme.colors.bg[0]}!important`,
    '.title': {
      [theme.fn.smallerThan('lg')]: {
        fontSize: '2.4rem!important',
        transition: 'font-size 100ms ease-in-out',
      },
    },
  },
  searchInput: {
    height: '54px',
    backgroundColor: 'white',
    borderRadius: '5px',
    outlineColor: `${theme.colors.primary[0]}!important`,
  },
  searchInputContainer: {
    position: 'absolute',
    bottom: '-64px',
    width: '100%',
  },
  headerAfterScroll: {
    position: 'fixed',
    backgroundColor: `${theme.colors.bg[0]}!important`,
    zIndex: 1,
    left: 0,
    right: 0,
    top: 0,
    minHeight: '136px!important',
    '.title': {
      display: 'none',
    },
  },
}));
