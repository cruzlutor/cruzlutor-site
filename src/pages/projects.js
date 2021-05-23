import * as React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquare } from '@fortawesome/pro-light-svg-icons';

const Project = ({ title, description, tags }) => {
  return (
    <div className="p-3 w-full md:w-1/3">
      <div className="flex flex-col h-64 bg-foreground dark:bg-foreground-dark shadow rounded-md p-5">
        <h2 className="flex justify-between items-center font-bold text-heading dark:text-heading-dark mb-4">
          {title}{' '}
          <FontAwesomeIcon
            icon={faExternalLinkSquare}
            className="text-primary dark:text-primary-dark"
          />
        </h2>
        <p className="text-body dark:text-body-dark">{description}</p>
        <div className="text-secondary font-roboto-mono text-xs mt-auto">
          {tags}
        </div>
      </div>
    </div>
  );
};
const ProjectsPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="font-roboto-mono text-3xl md:text-4xl mb-6 md:mb-8 text-heading dark:text-heading-dark">
          Projects I've worked on
        </h1>
        <div className="flex justify-center -mx-3 flex-wrap">
          <Project
            title="GAIN"
            description="Webapp for approval and publish content almost everywhere!"
            tags="React, Emotion, Gatsby, Redux"
          />
          <Project
            title="Mofunga"
            description="HTML5 gaming site"
            tags="React, Next, Django"
          />
          <Project
            title="Colorstars"
            description="Educational game made entirely in Javascript using Phaser and WebGL"
            tags="PhaserJS"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
