import { createStyles, Title } from '@mantine/core';
import { Row } from 'theme/restyled';

const useSectionHeader = createStyles((theme) => ({
  container: {},
  talk: {
    [theme.fn.smallerThan('sm')]: {
      position: 'fixed',
      bottom: theme.spacing.lg,
      right: theme.spacing.lg,
    },
  },
}));

type SectionHeaderProps = {
  title: string;
  showBtn?: boolean;
};

const SectionHeader = ({ title, showBtn = true }: SectionHeaderProps) => {
  const { classes } = useSectionHeader();

  return (
    <Row className={classes.container} justify="space-between" align="center">
      <Title>{title}</Title>
      {showBtn && (
        <button type="button" className={classes.talk}>
          Lets talk
        </button>
      )}
    </Row>
  );
};

export default SectionHeader;
