import { Button, Modal, SimpleGrid } from '@mantine/core';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { Row } from 'theme/restyled';
import { Carousel } from '@mantine/carousel';
import { useDisclosure } from '@mantine/hooks';
import { content } from 'data';
import SectionTitle from '../SectionTitle';
import { ProjectCard } from './Works.components';
import { useWorks } from './Works.hooks';

const WorksSection = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const { selectedProjects, projects } = useWorks([1, 3, 2, 6, 0]);

  return (
    <div className="inner-root">
      <div className="inner-container">
        <SectionTitle title="Free Time Projects" />
        <Row>
          <Carousel
            slideSize="max(300px, 50%)"
            containScroll="trimSnaps"
            height={290}
            slideGap="md"
            loop
            dragFree
            withIndicators
            align="center"
            slidesToScroll={1}
            initialSlide={2}
            styles={{
              root: { width: 'min(100%, 1240px)' },
              indicator: {
                width: 12,
                height: 4,
                transition: 'width 250ms ease',
                '&[data-active]': { width: 40 },
              },
            }}
          >
            {selectedProjects.map((project) => (
              <Carousel.Slide key={project.id}>
                <ProjectCard {...project} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Row>
        <Row justify="center" mt="lg">
          <Button
            onClick={open}
            radius="xl"
            size="xl"
            className="button"
            sx={({ spacing }) => ({
              marginBottom: 4 * spacing.xl,
            })}
          >
            View Showcases
          </Button>
        </Row>
        <Modal
          opened={opened}
          onClose={close}
          size="min(100%, 1240px)"
          styles={{
            modal: {
              height: 'calc(100vh - 100px)',
              overflow: 'hidden',
            },
            title: {
              flexGrow: 1,
            },
          }}
          title={
            <Row
              justify="center"
              sx={{
                width: '100%',
                '> div': {
                  paddingTop: 0,
                  paddingBottom: 0,
                },
              }}
            >
              <SectionTitle title="My Showcases" />
            </Row>
          }
        >
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 'sm', cols: 1, spacing: 'md' },
              { maxWidth: 'md', cols: 2, spacing: 'md' },
            ]}
            style={{
              overflow: 'auto',
              height: 'calc(100vh - 280px)',
            }}
            my="md"
          >
            {projects.map((project) => (
              <ProjectCard {...project} key={project.id} />
            ))}
          </SimpleGrid>
          <Button
            component="a"
            href={content.contacts.github}
            target="_blank"
            fullWidth
            radius="xl"
            size="xl"
            rightIcon={<GitHubLogoIcon />}
            className="button"
            mt="md"
          >
            See more on Github
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default WorksSection;
