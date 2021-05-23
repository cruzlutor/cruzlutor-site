import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
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
  const { pathname } = useLocation();
  return (
    <AniLink
      cover
      to={props.to}
      duration={0.6}
      className={
        'md:mr-16 p-2  hover:text-heading dark:hover:text-heading-dark'
      }
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={cx('mr-4', {
          'text-secondary dark:text-secondary-dark': pathname === props.to,
        })}
      />{' '}
      {props.children}
    </AniLink>
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
            <TransitionLink to="/" icon={faLayerGroup}>
              Home
            </TransitionLink>
            <TransitionLink to="/projects" icon={faLayerGroup}>
              Projects
            </TransitionLink>
            <TransitionLink to="/contact" icon={faAddressCard}>
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
