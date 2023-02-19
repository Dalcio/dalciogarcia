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
  Companies,
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
      <Companies />
      <ContactMe />
      <FloatFooter />
    </Container>
  </>
);

export default HomePage;
