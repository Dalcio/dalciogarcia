import {
  AboutMe,
  Articles,
  ContactMe,
  Home,
  Container,
  Works,
  FloatFooter,
  Cover,
  Header,
} from 'components';

const HomePage = () => (
  <>
    <Cover />
    <Header />
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
