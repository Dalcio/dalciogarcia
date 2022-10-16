import {
  AboutMe,
  Articles,
  ContactMe,
  Home,
  Container,
  Works,
  FloatFooter,
  Cover,
} from 'components';

const HomePage = () => (
  <>
    <Cover />
    <Home />
    <Container>
      <AboutMe />
      <Works />
      <Articles />
      <ContactMe />
      <FloatFooter />
    </Container>
  </>
);

export default HomePage;
