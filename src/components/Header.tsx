import { Box, Button, createStyles } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Row } from 'theme/restyled';

const useHeaderStyles = (scrolled: boolean) =>
  createStyles((theme) => ({
    container: {
      transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
      backgroundColor: scrolled ? theme.white : 'transparent',
      position: 'fixed',
      top: 0,
      right: 0,
      left: 0,
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
      zIndex: 10,

      a: {
        color: scrolled ? theme.black : theme.white,
        '&:hover': {
          color: theme.colors.primary[0],
        },
      },
    },
    menuContainer: {
      width: 'min(100%, 1240px)',
      margin: '0 auto',
      padding: theme.spacing.md,
      justifyContent: 'space-between',
    },
    button: {},
  }));

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scroll] = useWindowScroll();
  const { classes } = useHeaderStyles(scrolled)();

  useEffect(() => {
    if (scroll.y > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scroll]);

  return (
    <Box className={classes.container}>
      <Row className={classes.menuContainer} align="center">
        <Button component={Link} href="/blog" radius="xl" size="md" className="button">
          Blog
        </Button>
        <Row align="center">
          <a href="#home">Home</a>
          <a href="#about-me">About Me</a>
          <a href="#common-techs">Common Techs</a>
          <a href="#my-services">My Services</a>
          <a href="#my-works">My Works</a>
          <a href="#my-articles">My Articles</a>
          <a href="#contact-me">Contact Me</a>
        </Row>
      </Row>
    </Box>
  );
};

export default Header;
