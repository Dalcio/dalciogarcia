/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { companies } from 'data';
import { v4 as uuid } from 'uuid';
import { SimpleGrid, Tooltip, createStyles } from '@mantine/core';
import SectionTitle from './SectionTitle';

type CompanyProps = {
  name: string;
  logo: string;
  link: string;
};

const Company = ({ logo, name, link }: CompanyProps) => (
  <Link href={link} passHref target="_blank">
    <Tooltip label={name} position="bottom">
      <img
        alt={name}
        src={logo}
        width="200px"
        height="200px"
        style={{ objectFit: 'cover', borderRadius: '5px' }}
      />
    </Tooltip>
  </Link>
);

const useCompaniesStyles = createStyles((theme) => ({
  root: {
    paddingBottom: 4 * theme.spacing.xl,
  },
}));

const Companies = () => {
  const { classes } = useCompaniesStyles();

  return (
    <div className={`inner-root ${classes.root}`}>
      <div className="inner-container">
        <SectionTitle title="Collaborated Companies" />

        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 'md' }]}
          style={{ overflow: 'auto', justifyItems: 'center' }}
          my="md"
        >
          {companies.map((company) => (
            <Company {...company} key={uuid()} />
          ))}
        </SimpleGrid>
      </div>
    </div>
  );
};

export default Companies;
