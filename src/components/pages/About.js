import React from 'react';
import umair from '../../assets/images/portfolio_pic.png';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3, IoLogoJavascript, IoLogoNodejs } from 'react-icons/io';
import { FaReact, FaNpm } from 'react-icons/fa';
import { DiMongodb, DiJqueryLogo } from 'react-icons/di';
import { SiHandlebarsdotjs, SiGraphql, SiApollographql } from 'react-icons/si';
import Tooltip from '@mui/material/Tooltip';

export default function About() {
  return (
    <div>
      <div className="container">
        <div className="content-headings">
          <h2 className="headings">Huw Richmond</h2>
        </div>
        <div className="about-card-container">
          <img src={huw} className="mypic" alt="huw"></img>
          <div className="p">
            <p>
              I'm a qualified social worker with over 10 years experience working in child protection. 
              I'm now looking for opportunities to follow my passion for technology, moving away from 
              social work and develop my skills in this exciting and growing industry. I'm currently 
              working to upskill myself with widely used web development frameworks and technologies 
              and I'm seeking learning opportunities to grow my interet in this space.
            </p>
            <p>
              My career objective is to continue to develop skills in the IT industry, both through 
              formal education and through practical experience and learning opportunities. I'd ideally
              like the opportunity to apply my learnings and experience as a social worker in creative 
              ways that will also benefit any new roles in the IT industry.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: '#e76f51ff', fontWeight: 'bold', fontStyle: 'italic' }}>SKILLS</h1>
        <br></br>
        <br></br>
        <h2 style={{ color: '#083c52' }}></h2>
        <br></br>
        <br></br>

      </div>
      <div style={{ marginBottom: '8%' }} className="skills flex-wrap">
        <div className="container ">
          <div className="content-headings">
            <h2 className="headings"> Front end Proficiency </h2>
          </div>
          <div className="p">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Handlebars</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="content-headings">
            <h2 className="headings"> Back end Proficiency </h2>
          </div>
          <div className="p">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Apollo GraphQL</li>
              <li>Insomnia</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
