import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title="Cruzlutor: Contact"
        description="If you have any question please contact with me"
      />
      <Container>
        <h1 className="font-roboto-mono text-3xl md:text-4xl text-heading dark:text-heading-dark">
          Get in touch!
        </h1>
        <p className="my-6 mg:my-8 max-w-lg">
          Currently I’m not looking for new oportunities, however, if you have
          any question feel free to reach me out.
        </p>
        <a
          aria-label="Email"
          href="mailto:cruzlutor@gmail.com"
          className="inline-block border border-solid py-1 md:py-2 px-3 md:px-4 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark mr-3 md:mr-4"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
          Email
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          href="https://github.com/cruzlutor"
          className="inline-block border border-solid py-1 md:py-2 px-3 md:px-4 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark mr-3 md:mr-4"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/cruzlutor"
          className="inline-block border border-solid py-1 md:py-2 px-3 md:px-4 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark mr-3 md:mr-4"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          href="https://twitter.com/cruzlutor"
          className="inline-block border border-solid py-1 md:py-2 px-3 md:px-4 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
