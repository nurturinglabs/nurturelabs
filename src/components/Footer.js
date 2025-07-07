import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20 text-center">
      <p className="text-sm mb-2">© {new Date().getFullYear()} NurtureLabs. All rights reserved.</p>
      <p className="text-sm mb-2">"There has never been a better time to be a student in human history than today.”</p>
    </footer>
  );
}

export default Footer;
