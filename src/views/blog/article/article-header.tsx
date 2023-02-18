import { Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { BiChevronLeft } from 'react-icons/bi';
import { Row } from 'theme/restyled';

type BlogHeaderProps = {
  className: string;
};

export const ArticleHeader = ({ className }: BlogHeaderProps) => (
  <Stack className={className}>
    <Stack className="inner-root">
      <Stack className="inner-container">
        <Row align="center" style={{ justifyContent: 'space-between' }}>
          <Link href="/blog" passHref>
            <Row align="center">
              <BiChevronLeft color="#3498db" size="2rem" />
              <Text weight="bold" style={{ fontSize: '1.5rem' }}>
                Voltar
              </Text>
            </Row>
          </Link>
          <Link href="/" passHref>
            <Row align="center">
              <Text weight="bold" style={{ fontSize: '1.5rem' }}>
                Dálcio Garcia
              </Text>
            </Row>
          </Link>
        </Row>
      </Stack>
    </Stack>
  </Stack>
);
