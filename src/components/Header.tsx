import { Box } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Row } from 'theme/restyled';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    if (scroll.y > 40) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scroll]);

  return (
    <Box
      sx={(theme) => ({
        transition: 'background-color 200ms ease-in-out, color 200ms ease-in-out',
        backgroundColor: scrolled ? theme.white : 'transparent',
        zIndex: 10,
        a: {
          color: scrolled ? theme.black : theme.white,

          '&:hover': {
            color: theme.colors.primary[0],
          },
        },
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
      })}
    >
      <Row
        p="md"
        align="left"
        justify="end"
        style={{
          width: 'min(100%, 1240px)',
          margin: '0 auto',
        }}
      >
        <a href="#home">Home</a>
        <a href="#about-me">About Me</a>
        <a href="#common-techs">Common Techs</a>
        <a href="#my-services">My Services</a>
        <a href="#my-works">My Works</a>
        <a href="#my-articles">My Articles</a>
        <a href="#contact-me">Contact Me</a>
      </Row>
    </Box>
  );
};

export default Header;
