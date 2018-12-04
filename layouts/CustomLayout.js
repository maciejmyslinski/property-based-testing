import React from 'react';
import { node } from 'prop-types';
import { FixPositioning } from '../components/FixPositioning';

export const CustomLayout = ({ children }) => <FixPositioning>{children}</FixPositioning>;

CustomLayout.propTypes = {
  children: node,
};
