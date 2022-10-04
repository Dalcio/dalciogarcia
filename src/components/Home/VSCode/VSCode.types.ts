import { MantineStyleSystemProps } from '@mantine/core';

export type VSCodeProps = {
  className?: string;
};

export type CodeProps = {
  className?: string;
  width: string;
  d: number;
  cb?: () => void;
} & MantineStyleSystemProps;

export type CodeSpaceProps = {
  classes: Record<'container' | 'scroll' | 'toolsBar' | 'coding' | 'type' | 'func', string>;
  cb?: () => void;
};
