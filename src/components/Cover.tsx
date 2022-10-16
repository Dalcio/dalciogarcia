import { Image, keyframes } from '@mantine/core';

const universe = keyframes({
  from: {
    transform: 'scale(1)',
  },
  to: {
    transform: 'scale(4)',
  },
});

const Cover = () => (
  <Image
    src="/images/stars.jpg"
    alt="universe"
    sx={() => ({
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      right: 0,
      objectFit: 'cover',
      opacity: 0.2,
      animation: `${universe} 30s ease-in-out infinite alternate`,
    })}
  />
);

export default Cover;
