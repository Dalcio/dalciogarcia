import { Title } from '@mantine/core';
import { Row } from 'theme/restyled';

type SectionHeaderProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionHeaderProps) => {
  const brokenTitle = title.split(' ');

  return (
    <Row align="center" justify="center">
      <Title>{brokenTitle[0]}</Title>
      <Title
        sx={(theme) => ({
          color: theme.colors.primary[0],
        })}
      >
        {' '}
        {brokenTitle[1]}
      </Title>
    </Row>
  );
};

export default SectionTitle;
