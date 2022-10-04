import { createStyles, keyframes } from '@mantine/core';

const fadeIn = keyframes({
  from: {
    transform: 'scale(0)',
  },
  '50%': {
    transform: 'scale(1.3)',
  },
  to: {
    transform: 'scale(1)',
  },
});

const breathInOut = keyframes({
  from: {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scaleX(1.06) translateX(-5px)',
    transformOrigin: 'center',
  },
  to: {
    transform: 'scale(1)  translateX(0)',
  },
});

export const useAvatarService = createStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  character: {
    maxHeight: '180px',
    position: 'relative',
    zIndex: 1,
    animation: `${fadeIn} 1s ease-in-out`,
  },
  chest: {
    animation: `${breathInOut} 3s ease-in-out infinite alternate`,
  },
}));
