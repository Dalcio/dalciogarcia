import { AboutMe, Articles, ContactMe, Home, Container, Works } from 'components';

const HomePage = () => (
  <Container>
    <Home />
    <AboutMe />
    <Works />
    <Articles />
    <ContactMe />
  </Container>
);

export default HomePage;
