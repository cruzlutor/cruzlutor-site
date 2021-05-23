import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
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
              <img src={profileImage} className="object-cover rounded-md" />
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
              href="mailto:cruzlutor@gmail.com"
              className="inline-block border border-solid py-2 px-8 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default IndexPage;
