import * as React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';

const ProjectsPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="font-roboto-mono text-3xl md:text-4xl text-heading dark:text-heading-dark">
          Get in touch!
        </h1>
        <p className="my-6 mg:my-8 max-w-lg">
          Currently I’m not looking for new oportunities, however, if you have
          any question feel free to reach me out.
        </p>
        <button className="border border-solid h-12 px-8 rounded-md border-primary dark:border-primary-dark text-primary dark:text-primary-dark">
          Get in touch
        </button>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
