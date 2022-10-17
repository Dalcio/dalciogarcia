import { Box, createStyles, Stack, Text, Title } from '@mantine/core';
import { ArrowTopRightIcon } from '@modulz/radix-icons';
import { content } from 'data';

const useContactMeStyles = createStyles((theme) => ({
  letsTalk: {
    color: theme.white,

    [theme.fn.largerThan('sm')]: {
      padding: 3 * theme.spacing.xl,
      borderSpacing: theme.spacing.xl,
      borderRadius: '100%',
      border: `1px solid ${theme.white}`,
    },

    '&:hover': {
      transition: 'color 200ms ease-in-out, border-color 200ms ease-in-out',
      cursor: 'pointer',

      [theme.fn.largerThan('sm')]: {
        borderColor: theme.colors.primary[0],
      },

      '& > div > *:not(div) ': {
        color: theme.colors.primary[0],
      },
    },
  },
}));

const ContactMe = () => {
  const { classes } = useContactMeStyles();

  return (
    <div className="inner-root" id="contact-me">
      <div className="inner-container">
        <Stack align="center" justify="center" style={{ minHeight: '100vh' }}>
          <a href={content.contacts.mailto} className="lets-talk">
            <Stack align="center" justify="center" className={classes.letsTalk}>
              <Box>
                <Text>
                  You found <br /> someone awesome
                </Text>
                <a href={content.contacts.mailto} className="lets-talk">
                  {content.contacts.mail}
                </a>
                <Title>Talk with</Title>
                <Title>Dálcio Garcia</Title>
                <ArrowTopRightIcon width={60} height={60} />
              </Box>
            </Stack>
          </a>
        </Stack>
      </div>
    </div>
  );
};
export default ContactMe;
