import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <nav className="fixed w-full h-20 bg-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        <h1 className="text-secondary text-3xl font-bold">Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer text-lightText hover:text-secondary duration-300 capitalize">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
          {nav ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-primary">
            {links.map(({ id, link }) => (
              <li key={id} className="px-4 cursor-pointer py-6 text-2xl capitalize">
                <Link onClick={handleClick} to={link} smooth duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 