import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../images/cruzlutor.png';

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Cruzlutor: Home"
        description="Welcome to my personal website, I'm Luis Cruz, a Front-End Software Developer from Colombia"
      />
      <Container>
        <div className="block md:flex items-center">
          <div className="flex-grow flex-shrink-0	order-1 w-36 md:w-44 mb-8 md:mb-0">
            <div className="relative aspect-w-3 aspect-h-4">
              <div className="absolute bg-primary dark:bg-primary-dark rounded-md bottom-2 right-2 -top-2 -left-2 -z-10"></div>
              <div className="absolute bg-secondary dark:bg-secondary-dark rounded-md -right-2 -bottom-2 top-2 left-2 -z-10"></div>
              <img
                src={profileImage}
                className="object-cover rounded-md"
                alt="Luis Cruz profile image"
              />
            </div>
          </div>
          <div class="order-0 md:mr-40">
            <h1 className="font-roboto-mono text-4xl md:text-5xl text-heading dark:text-heading-dark">
              @Cruzlutor
            </h1>
            <p className="my-6 md:my-8">
              Hello, I’m{' '}
              <span className="text-secondary dark:text-secondary-dark">
                Luis Cruz
              </span>
              , a Front-End Software Developer located in Bogota Colombia, I’ve
              been building and deploying things on the web since 2002, I love
              to create beautiful and clean UI focused on the best performance
              and UX practices.
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
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
