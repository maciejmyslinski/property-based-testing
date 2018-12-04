import React from 'react';
import { node } from 'prop-types';
import './globalStyles';
import { ThemeProvider } from 'styled-components';

const Provider = ({ children }) => (
  <React.Fragment>
    <ThemeProvider
      theme={() => ({
        font: 'Averta, sans-serif',
        colors: { text: '#000', background: 'transparent' },
        fontSizes: ['1.75vw', '2.3vw', '3.5vw', '4.6vw', '7vw'],
        css: {
          fontSize: '16px',
          textAlign: 'center',
          '@media screen and (min-width:64em)': {
            fontSize: '32px',
          },
        },
      })}
    >
      {children}
    </ThemeProvider>
  </React.Fragment>
);

Provider.propTypes = {
  children: node,
};

export const theme = {
  Provider,
};
