import { Box, Stack, Title } from '@mantine/core';
import { Row } from 'theme/restyled';

export const HorizontalRule = () => (
  <Stack align="center">
    <Box
      sx={(theme) => ({
        width: '100px',
        height: '4px',
        backgroundColor: theme.colors.primary[0],
      })}
      mt="md"
    />
  </Stack>
);

type SectionHeaderProps = {
  title: string;
  desc?: JSX.Element | JSX.Element[];
};

const SectionTitle = ({ title, desc }: SectionHeaderProps) => {
  const brokenTitle = title.split(' ');

  return (
    <Stack
      align="center"
      sx={(theme) => ({
        paddingTop: 4 * theme.spacing.xl,
        paddingBottom: 2 * theme.spacing.xl,

        strong: {
          color: theme.colors.primary[0],
        },
      })}
      className="section-title"
    >
      <Row align="center" justify="center">
        <Title>{brokenTitle[0]}</Title>
        <Title
          sx={(theme) => ({
            color: theme.colors.primary[0],
          })}
        >
          {' '}
          {brokenTitle.slice(1).join(' ')}
        </Title>
      </Row>
      {desc && desc}
      {desc && <HorizontalRule />}
    </Stack>
  );
};

export default SectionTitle;
