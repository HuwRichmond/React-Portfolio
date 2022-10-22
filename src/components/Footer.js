import React from 'react';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const iconItems = [
    {
      icon: (
        <a
          href="https://github.com/HuwRichmond"
          target="_blank"
          rel="noopener noreferrer"
          whilehover={{ scale: 1.1 }}
          whiletap={{ scale: 0.9 }}>
          <FaGithubSquare />
        </a>
      )
    },
    {
      icon: (
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      )
    },
    {
      icon: (
        <a href="huwlrichmond@gmail.com" aria-label="Email me">
          <FaEnvelope />
        </a>
      )
    }
  ];

  return (
    <footer className="footer">
      <div className="flex items-center justify-center">
        {iconItems.map((item) => (
          <div key={item.href}>
            <div className="nav-link">
              <div className="icon-padding">
                <div>{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
