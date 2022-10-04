import { Stack } from '@mantine/core';
import { useRef } from 'react';
import { Row } from 'theme/restyled';
import { CodeSpace } from './VSCode.components';
import { useVSCodeStyles } from './VSCode.styles';
import { VSCodeProps } from './VSCode.types';

const useVSCode = () => {
  const { classes } = useVSCodeStyles();
  const codingRef = useRef<HTMLDivElement>(null);

  const scrollToEnd = () => {
    if (codingRef && codingRef.current) {
      codingRef.current.scrollTop = codingRef.current.scrollHeight;
    }
  };

  return { classes, scrollToEnd, codingRef };
};

const VSCode = ({ className }: VSCodeProps) => {
  const { classes, scrollToEnd, codingRef } = useVSCode();

  return (
    <div className={`${className} ${classes.container}`}>
      <Row className={classes.toolsBar}>
        <div className="ball" />
        <div className="ball" />
        <div className="ball" />
      </Row>

      <Stack ref={codingRef} className={classes.coding} p="md">
        <CodeSpace classes={classes} cb={scrollToEnd} />
      </Stack>

      <Stack className={classes.scroll} p="xs" spacing={0}>
        <CodeSpace classes={classes} />
      </Stack>
    </div>
  );
};

export default VSCode;
