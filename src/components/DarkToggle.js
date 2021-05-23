import React, { useState } from 'react';
import cx from 'classnames';

const DarkToggle = () => {
  const [dark, setDark] = useState(true);

  function toggleDarkTheme() {
    document.body.classList.toggle('dark');
    setDark(!dark);
  }
  return (
    <div className="flex items-center cursor-pointer" onClick={toggleDarkTheme}>
      <div className="relative">
        <div className="block bg-foreground-dark dark:bg-foreground w-12 h-7 rounded-full"></div>
        <div
          className={cx(
            'absolute left-1 top-1 w-5 h-5 rounded-full transition transform-gpu',
            { 'bg-secondary-dark': dark },
            { 'bg-secondary': !dark },
            { 'translate-x-full': dark }
          )}
        ></div>
      </div>
    </div>
  );
};

export default DarkToggle;
