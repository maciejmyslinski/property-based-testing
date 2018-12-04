import React from 'react';
import { CodeSurfer as OriginalCodeSurfer } from 'mdx-deck-code-surfer';
import merge from 'merge';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

const myCustomizedTheme = merge.recursive(true, duotoneLight, {
  plain: {
    backgroundColor: '#ffffff',
  },
});

export const CodeSurfer = ({ code }) => <OriginalCodeSurfer theme={myCustomizedTheme} code={code} />;
