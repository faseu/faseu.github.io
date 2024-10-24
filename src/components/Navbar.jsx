import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, light, dark } from '../assets';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [pathname, setPathname] = useState('/');
  // Use state to store the visibility and position of the navbar
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState('absolute');

  // Use effect to add an event listener to the window object to detect scroll events
  useEffect(() => {
    setPathname(window.location.pathname);
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Define a function to handle the scroll events
  const handleScroll = () => {
    // Get the current scroll position
    const currentScrollPos = window.scrollY;

    // Compare the current scroll position with the previous one
    if (currentScrollPos > 0) {
      // If the user scrolls down, hide the navbar and make it fixed
      setVisible(false);
      setPosition('fixed');
    } else {
      // If the user scrolls up, show the navbar and make it relative
      setVisible(true);
      setPosition('absolute');
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 ${position} ${visible ? '-top-20' : 'top-0'} z-50 bg-light-bg transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Main logo / Home button */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img className="object-contain w-9 h-9" src={logo} alt="logo" />
          <p className="text-accent text-[18px] font-bold cursor-pointer flex">
            Faseu&nbsp;
            <span className="sm:block hidden">| Developer</span>
          </p>
        </Link>

        {/* Other links */}
        <ul
          className={`list-none hidden sm:flex flex-row gap-10 transition-all duration-300`}
        >
          {/*<li*/}
          {/*  className={`text-secondary hover:text-accent text-[18px] font-medium cursor-pointer flex items-center`}*/}
          {/*  onClick={() => {*/}
          {/*    setActive('projects');*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Link to="/projects">All Projects</Link>*/}
          {/*</li>*/}
          {/*<li*/}
          {/*  className={`text-secondary hover:text-accent text-[18px] font-medium cursor-pointer flex items-center`}*/}
          {/*  onClick={() => {*/}
          {/*    setActive('home');*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <Link to="/">Home</Link>*/}
          {/*</li>*/}
          {pathname === '/' && (
            <li className="text-secondary hover:text-accent text-[18px] font-medium cursor-pointer flex items-center">
              <Link to="/projects">All Projects</Link>
            </li>
          )}
          {pathname === '/projects' && (
            <li className="text-secondary hover:text-accent text-[18px] font-medium cursor-pointer flex items-center">
              <Link to="/">Home</Link>
            </li>
          )}
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
          {/*todo*/}
          {/*<img*/}
          {/*  src={toggle ? light : dark}*/}
          {/*  alt="menu"*/}
          {/*  className="w-[36px] h-[36px] object-contain cursor-pointer"*/}
          {/*  onClick={() => {*/}
          {/*    setToggle(!toggle);*/}
          {/*  }}*/}
          {/*/>*/}
        </ul>

        {/* Logic to switch hamburger menu images */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />

          {/* Drop down menu for navbar */}
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? 'text-white' : 'text-secondary'
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
