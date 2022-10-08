import { Box, createStyles, Stack, Text, Title } from '@mantine/core';
import { ArrowTopRightIcon } from '@modulz/radix-icons';
import { content } from 'data';
import SocialNetWorks from './Social';

const useContactMeStyles = createStyles((theme) => ({
  letsTalk: {
    [theme.fn.largerThan('sm')]: {
      padding: 3 * theme.spacing.xl,
      borderSpacing: theme.spacing.xl,
      borderRadius: '100%',
      backgroundImage:
        "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='white' stroke-width='4' stroke-dasharray='2%2c 8' stroke-dashoffset='57' stroke-linecap='butt'/%3e%3c/svg%3e\")",
      color: theme.white,
    },

    '&:hover': {
      transition: 'color 200ms ease-in-out, background-image 200ms ease-in-out',
      backgroundImage:
        "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2308D665FF' stroke-width='4' stroke-dasharray='2%2c 8' stroke-dashoffset='57' stroke-linecap='butt'/%3e%3c/svg%3e\")",
      cursor: 'pointer',

      '& > div > *:not(div) ': {
        color: theme.colors.primary[0],
      },
    },
  },
}));

const ContactMe = () => {
  const { classes } = useContactMeStyles();

  return (
    <div className="inner-root">
      <div className="inner-container">
        <Stack align="center" justify="space-between" style={{ height: '100vh' }}>
          <Stack align="center" justify="center" style={{ height: '100%' }}>
            <a href={content.contacts.mailto} className="lets-talk">
              <Stack align="center" justify="center" className={classes.letsTalk}>
                <Box>
                  <Text>
                    You found <br /> someone awesome
                  </Text>
                  <Title>Talk with</Title>
                  <Title>Dálcio Garcia</Title>
                  <ArrowTopRightIcon width={60} height={60} />
                </Box>
              </Stack>
            </a>
          </Stack>
          <Stack
            p="xl"
            align="center"
            spacing="xs"
            style={{ borderTop: '1px solid white', width: '100%' }}
          >
            <Text>Dálcio Garcia</Text>
            <a href={content.contacts.mailto} className="lets-talk">
              {content.contacts.mail}
            </a>
            <SocialNetWorks />
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
export default ContactMe;
