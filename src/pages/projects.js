import * as React from 'react';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquare } from '@fortawesome/pro-light-svg-icons';

const Project = ({ title, description, tags, url }) => {
  return (
    <div className="p-3 w-full md:w-1/3">
      <div className="flex flex-col h-56 bg-foreground dark:bg-foreground-dark shadow rounded-md p-5">
        <h2 className="flex justify-between items-center font-bold text-heading dark:text-heading-dark mb-4">
          {title}{' '}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primary-dark hover:text-secondary dark:hover:text-secondary-dark"
          >
            <FontAwesomeIcon
              icon={faExternalLinkSquare}
              className=" dark:text-primary-dark"
            />
          </a>
        </h2>
        <p className="text-body dark:text-body-dark">{description}</p>
        <div className="text-secondary dark:text-secondary-dark font-bold font-roboto-mono text-xs mt-auto">
          {tags}
        </div>
      </div>
    </div>
  );
};
const ProjectsPage = () => {
  return (
    <Layout>
      <SEO
        title="Cruzlutor: Projects"
        description="These are some projects I've worked on"
      />
      <Container>
        <h1 className="font-roboto-mono text-3xl md:text-4xl mb-6 md:mb-8 text-heading dark:text-heading-dark">
          Projects I've worked on
        </h1>
        <div className="flex justify-center -mx-3 flex-wrap">
          <Project
            title="GAIN"
            description="Webapp for approval and publish content almost everywhere!"
            tags="React, Emotion, Gatsby, Redux"
            url="https://gainapp.com"
          />
          <Project
            title="Cruzlutor"
            description="This portfolio you are viewing now"
            tags="Gatsby, Tailwind"
            url="https://cruzlutor.com"
          />
          <Project
            title="Mofunga"
            description="HTML5 gaming site"
            tags="React, Next, Django"
            url="https://mofunga.com"
          />
          <Project
            title="Colorstars"
            description="Educational game made entirely in Javascript using Phaser and WebGL"
            tags="PhaserJS"
            url="https://html5.gamemonetize.com/894qhoeoq6r9ta2yib7hz0xqfercw5c4/"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
