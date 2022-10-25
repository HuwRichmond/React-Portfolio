import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav-container">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-a active' : 'nav-a'}>
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-a active' : 'nav-a'}>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-a active' : 'nav-a'}>
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-a active' : 'nav-a'}>
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
