import React, { useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import cx from 'classnames';
import Container from './Container';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHomeLgAlt } from '@fortawesome/pro-regular-svg-icons';
import { faLayerGroup } from '@fortawesome/pro-regular-svg-icons';
import { faAddressCard } from '@fortawesome/pro-regular-svg-icons';

const TransitionLink = (props) => {
  const { pathname } = useLocation();
  return (
    <AniLink
      cover
      to={props.to}
      duration={0.6}
      className={
        'mr-4 md:mr-16 p-2  hover:text-heading dark:hover:text-heading-dark'
      }
    >
      <FontAwesomeIcon
        icon={props.icon}
        className={cx('mr-1 md:mr-4', {
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
            <TransitionLink to="/" icon={faHomeLgAlt}>
              Home
            </TransitionLink>
            <TransitionLink to="/projects" icon={faLayerGroup}>
              Projects
            </TransitionLink>
            <TransitionLink to="/contact" icon={faAddressCard}>
              Contact
            </TransitionLink>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navigation;
