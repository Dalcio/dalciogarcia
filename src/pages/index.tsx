import { AboutMe, Articles, ContactMe, Home, Container, Works } from 'components';

const HomePage = () => (
  <>
    <Home />
    <Container>
      <AboutMe />
      <Works />
      <Articles />
      <ContactMe />
    </Container>
  </>
);

export default HomePage;
