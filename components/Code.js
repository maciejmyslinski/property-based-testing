import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { CodeWrapper } from './CodeWrapper';
import { CodePre } from './CodePre';

export const Code = props => (
  <CodeWrapper>
    <Highlight {...defaultProps} theme={vsDark} {...props}>
      {({
        tokens, getLineProps, getTokenProps, style,
      }) => (
        <CodePre
          style={{
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </CodePre>
      )}
    </Highlight>
  </CodeWrapper>
);
