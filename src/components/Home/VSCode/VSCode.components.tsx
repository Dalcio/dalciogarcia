import { Box, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Row } from 'theme/restyled';
import { lineAnimation } from './VSCode.styles';
import { CodeProps, CodeSpaceProps } from './VSCode.types';

const LAST_TIME = 18 * 1000 - 200;

const Code = ({ className, width, d, cb, ...rest }: CodeProps) => {
  const [display, setVisible] = useState('none');
  const delay = d * 1000 - 200;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (display === 'none') {
      timeout = setTimeout(() => {
        setVisible('block');

        if (cb) cb();
      }, delay);
    } else {
      timeout = setTimeout(() => {
        setVisible('none');
      }, LAST_TIME - delay);
    }

    return () => clearTimeout(timeout);
  }, [display]);

  return (
    <Box
      className={`code ${className}`}
      style={{ width }}
      mb="xs"
      sx={() => ({
        animation: `${lineAnimation} 800ms linear`,
        display,
      })}
      {...rest}
    />
  );
};

export const CodeSpace = ({ classes, cb }: CodeSpaceProps) => (
  <>
    <Stack spacing={0} className={classes.type}>
      <Row spacing="xs">
        <Code className="kwd" d={0} width="20px" cb={cb} />
        <Code className="name" d={1} width="40px" cb={cb} />
        <Code className="text" d={2} width="5px" cb={cb} />
      </Row>
      <Code className="name" d={3} width="90px" ml="xs" cb={cb} />
      <Code className="text" d={2} width="5px" cb={cb} />
    </Stack>

    <Stack spacing={0} className={classes.func}>
      <Code className="kwd" d={4} width="40%" cb={cb} />

      <Row spacing="xs" pl="md">
        <Code className="kwd" d={6} width="20px" cb={cb} />
        <Code className="name" d={7} width="40px" cb={cb} />
      </Row>

      <Row spacing="xs" pl="md">
        <Code className="kwd" d={8} width="50px" cb={cb} />
        <Code className="brackets" d={9} width="5px" cb={cb} />
      </Row>

      <Stack spacing={0} pl="md">
        <Code className="name" d={10} width="40%" ml="md" cb={cb} />

        <Stack spacing={0} pl="md">
          <Row spacing="xs" pl="md">
            <Code className="name" d={11} width="30px" cb={cb} />
            <Code className="text" d={12} width="38%" cb={cb} />
            <Code className="name" d={11} width="30px" cb={cb} />
          </Row>
        </Stack>

        <Stack spacing={0} pl="md">
          <Code className="name" d={13} width="20%" ml="md" cb={cb} />
          <Stack spacing={0} pl="md">
            <Row spacing="xs" pl="md">
              <Code className="name" d={14} width="30px" cb={cb} />
              <Code className="text" d={15} width="28%" cb={cb} />
              <Code className="name" d={14} width="30px" cb={cb} />
            </Row>
            <Code className="text" d={16} width="30%" ml="md" cb={cb} />
          </Stack>
          <Code className="name" d={13} width="20%" ml="md" cb={cb} />
        </Stack>

        <Code className="name" d={10} width="40%" ml="md" cb={cb} />
      </Stack>

      <Code className="brackets" d={9} width="5px" ml="md" cb={cb} />
      <Code className="kwd" d={5} width="10px" cb={cb} />
    </Stack>
    <Row spacing="xs">
      <Code className="kwd" d={17} width="160px" cb={cb} />
      <Code className="name" d={18} width="80px" cb={cb} />
    </Row>
  </>
);
