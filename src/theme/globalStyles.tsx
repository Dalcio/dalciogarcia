import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ fn, colors }: MantineTheme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
      },

      body: {
        ...fn.fontStyles(),
        color: 'white',
        overflowX: 'hidden',
      },

      '*::-webkit-scrollbar': {
        width: '6px',

        '@media screen and (hover:none)': {
          width: '3px',
        },
      },

      '*::-webkit-scrollbar-track': {
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        background: '#c9cacc',
      },

      '*::-webkit-scrollbar-track:hover': {
        background: 'white',
      },
      '*::-webkit-scrollbar-thumb': {
        background: colors.primary[0],
      },

      '.scroll-bar::-webkit-scrollbar-thumb:hover': {
        background: '#01143b',
      },

      a: {
        textDecoration: 'unset',
        color: colors.primary[0],
      },

      '@keyframes universe': {
        from: {
          transform: 'scale(1)',
        },
        to: {
          transform: 'scale(4)',
        },
      },
    })}
  />
);

export default GlobalStyles;
