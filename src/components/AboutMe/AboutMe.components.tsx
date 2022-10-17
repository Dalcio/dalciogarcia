import { Stack, Text } from '@mantine/core';
import SectionTitle from 'components/SectionTitle';

type AboutMeCardProps = {
  icon: JSX.Element;
  desc?: string;
  name: string;
};

export const AboutMeCard = ({ icon, desc, name }: AboutMeCardProps) => (
  <Stack
    justify="center"
    align="center"
    className="about-me-card"
    p="lg"
    sx={(theme) => ({
      borderRadius: theme.radius.md,
      boxShadow: '0px -1px 30px rgb(0 0 0 / 10%)',

      '.icon': {
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.white,
        color: theme.colors.primary[0],
        borderRadius: '50%',
      },

      '.name': {
        color: theme.black,
      },

      '&:hover': {
        '.name': {
          transition: 'color 200ms ease-in-out',
          color: theme.colors.primary[0],
        },

        '.icon': {
          transition: 'background-color 200ms ease-in-out',
          backgroundColor: theme.colors.primary[0],
          color: theme.white,
        },
      },
    })}
  >
    <div className="icon">{icon}</div>
    <Text size="lg" align="center" className="name" weight={700}>
      {name}
    </Text>
    <Text align="center">{desc}</Text>
  </Stack>
);

export const MobileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    />
  </svg>
);

type AboutMeComponentProps = {
  title: string;
  innerRootClass: string;
  innerContainerClass: string;
  titleDesc?: JSX.Element;
  children?: JSX.Element[] | JSX.Element;
};

export const AboutMeComponent = ({
  innerContainerClass,
  innerRootClass,
  title,
  titleDesc,
  children,
}: AboutMeComponentProps) => (
  <div className={`inner-root ${innerRootClass}`}>
    <div className={`inner-container ${innerContainerClass}`}>
      <SectionTitle title={title} desc={titleDesc} />
      {children}
    </div>
  </div>
);
