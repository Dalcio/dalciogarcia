import { Box } from '@mantine/core';
import Image from 'next/image';

const Cover = () => (
  <Box
    style={{
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
      opacity: 0.2,
    }}
  >
    <Image
      src="/images/stars.jpg"
      alt="universe"
      fill
      style={{
        objectFit: 'cover',
        animation: 'universe 30s ease-in-out infinite alternate',
      }}
    />
  </Box>
);

export default Cover;
