import React from 'react';
import { ThemeContext } from './themeContext';

export const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="shadow shadow-xl font-extrabold text-blue-text dark:text-white dark:bg-blue-elements">
      <div className="grid grid-cols-2 py-5">
        <a href="/" className="text-3xl laptop:ml-60 laptop:text-3xl mobile:ml-5 mobile:text-xl">Where in the world?</a>
        <div className="text-xl place-self-end flex flex-row laptop:mr-64 mobile:mr-5">
          {theme === 'dark' ? (
            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <i className="fas fa-moon laptop:fa-sm mobile:fa-xs laptop:mt-2"></i>
            </div>
          ) : (
            <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              <i className="far fa-moon laptop:fa-sm mobile:fa-xs laptop:mt-2"></i>
            </div>
          )}
          <p className="laptop:ml-5 mobile:ml-3 laptop:text-3xl mobile:text-xl">Dark Mode</p>
        </div>
      </div>
    </div>
  );
};
