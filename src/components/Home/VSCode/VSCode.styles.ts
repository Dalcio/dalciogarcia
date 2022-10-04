import { createStyles, keyframes } from '@mantine/core';

export const lineAnimation = keyframes({
  from: {
    width: 0,
  },
  to: {
    width: 'default',
  },
});

export const useVSCodeStyles = createStyles((theme) => ({
  container: {
    width: `min(calc(100% - ${2 * theme.spacing.lg}px), 760px)`,
    border: `1px solid ${theme.white}`,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
    background: '#202739',
    position: 'relative',

    '& .code': {
      width: '100%',
      height: '10px',
      borderRadius: theme.radius.md,

      '&:hover': {
        opacity: 0.4,
        cursor: 'text',
      },
    },

    '& .code.kwd': {
      background: '#7A206A',
    },
    '& .code.name': {
      background: '#42BAFE',
    },
    '& .code.text': {
      background: '#fff',
    },
    '& .code.brackets': {
      background: '#E6902E',
    },
  },

  toolsBar: {
    background: '#0F1821',
    width: '100%',
    height: '40px',
    alignItems: 'center',
    justifyContent: 'end',
    paddingRight: theme.spacing.md,

    '.ball': {
      width: '15px',
      height: '15px',
      borderRadius: '50%',
      transition: 'transform 200ms ease-in-out',

      '&:hover': {
        cursor: 'pointer',
        opacity: 0.6,
        transform: 'scale(1.3)',
      },
    },
    '.ball:first-of-type': {
      backgroundColor: '#B33B44',
    },
    '.ball:nth-of-type(2)': {
      backgroundColor: '#F4632C',
    },
    '.ball:last-of-type': {
      backgroundColor: '#43AE44',
    },
  },

  coding: {
    overflowY: 'auto',
    height: '300px',

    '&::-webkit-scrollbar': {
      width: '4px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'white',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '#103153',
    },
  },

  type: {},

  func: {},

  scroll: {
    background: '#181F2D',
    position: 'absolute',
    right: '10px',
    width: 'max(20%, 100px)',
    top: '40px',
    bottom: 0,
    overflow: 'hidden',
    opacity: 0.5,

    '& .code': {
      height: '1px',
    },
  },
}));
