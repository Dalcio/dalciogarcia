import { Stack, Text } from '@mantine/core';
import Link from 'next/link';
import { BiHome } from 'react-icons/bi';
import { Row } from 'theme/restyled';
import { BlogHeaderProps } from './blog.types';

export const BlogHeader = ({ className, children }: BlogHeaderProps) => (
  <Stack className={className}>
    <div className="inner-root">
      <div className="inner-container">
        <Link href="/" passHref>
          <Row align="center">
            <BiHome color="#3498db" size="2rem" />
          </Row>
          <Text style={{ opacity: 0.8, color: 'white' }}>Dálcio Macuete Garcia</Text>
        </Link>
        <Text my="md" weight="bold" style={{ fontSize: '3.4rem' }} className="title">
          The best way to learn something is by teaching this thing
        </Text>
      </div>
    </div>
    {children}
  </Stack>
);
