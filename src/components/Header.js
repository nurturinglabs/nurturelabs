import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-800">NurtureLabs</h1>
        <nav className="space-x-6 text-lg font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-700 font-bold'
                : 'text-gray-700 hover:text-blue-600 transition'
            }
          >
            NoTuitions
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
