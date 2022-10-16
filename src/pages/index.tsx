import { AboutMe, Articles, ContactMe, Home, Container, Works, FloatFooter } from 'components';

const HomePage = () => (
  <>
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
