import { Global, MantineTheme } from '@mantine/core';
import React from 'react';

const GlobalStyles = () => (
  <Global
    styles={({ fn }: MantineTheme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
        margin: 0,
      },

      body: {
        ...fn.fontStyles(),
        color: 'white',
      },

      '*::-webkit-scrollbar': {
        width: '10px',
      },

      '*::-webkit-scrollbar-track': {
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        background: '#c9cacc',
      },

      '*::-webkit-scrollbar-track:hover': {
        background: '#78797a',
      },
      '*::-webkit-scrollbar-thumb': {
        background: 'white',
      },

      '.scroll-bar::-webkit-scrollbar-thumb:hover': {
        background: '#01143b',
      },
    })}
  />
);

export default GlobalStyles;
