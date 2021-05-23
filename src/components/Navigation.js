import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import Container from './Container';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLgAlt } from '@fortawesome/pro-regular-svg-icons';
import { faLayerGroup } from '@fortawesome/pro-regular-svg-icons';
import { faAddressCard } from '@fortawesome/pro-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const TransitionLink = (props) => {
  return (
    <AniLink
      cover
      duration={0.6}
      className="md:mr-16 p-2 hover:text-heading dark:hover:text-heading-dark"
      {...props}
    />
  );
};

const Navigation = () => {
  // const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  function onScroll() {
    setSolid(window.pageYOffset >= 1 ? true : false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      className={cx('fixed w-full z-20', {
        'bg-background dark:bg-background-dark shadow-md': solid,
      })}
    >
      <Container>
        <nav className="flex items-center justify-between h-20 -mx-2">
          <div className="flex items-center">
            <TransitionLink to="/">
              <FontAwesomeIcon icon={faHomeLgAlt} className="mr-4" />
              Home
            </TransitionLink>
            <TransitionLink to="/projects">
              <FontAwesomeIcon icon={faLayerGroup} className="mr-4" />
              Projects
            </TransitionLink>
            <TransitionLink to="/contact">
              <FontAwesomeIcon icon={faAddressCard} className="mr-4" />
              Contact
            </TransitionLink>
          </div>

          {/* <div className="flex text-lg">
            <a href="#" className="block p-2 mr-2 hover:text-heading">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="block p-2 mr-2 hover:text-heading">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="block p-2 mr-2 hover:text-heading">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div> */}
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
