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
              I'm a qualified social worker with over 10 years experience working in child
              protection. I'm now looking for opportunities to follow my passion for technology,
              moving away from social work and develop my skills in this exciting and growing
              industry. I'm currently working to upskill myself with widely used web development
              frameworks and technologies and I'm seeking learning opportunities to grow my interet
              in this space.
            </p>
            <p>
              My career objective is to continue to develop skills in the IT industry, both through
              formal education and through practical experience and learning opportunities. I'd
              ideally like the opportunity to apply my learnings and experience as a social worker
              in creative ways that will also benefit any new roles in the IT industry.
            </p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: '#e76f51ff', fontWeight: 'bold', fontStyle: 'italic' }}>SKILLS</h1>
        <br></br>
        <br></br>
        <h2 style={{ color: '#083c52' }}>Programming Languages & Tools</h2>
        <br></br>
        <br></br>
        <Tooltip title="HTML">
          <i style={{ marginLeft: '2%' }}>
            <AiFillHtml5 size={50} />
          </i>
        </Tooltip>
        <Tooltip title="jQuery">
          <i style={{ marginLeft: '2%' }}>
            <DiJqueryLogo size={50} />
          </i>
        </Tooltip>
        <Tooltip title="MongoDB">
          <i style={{ marginLeft: '2%' }}>
            <DiMongodb size={50} />
          </i>
        </Tooltip>
        <Tooltip title="HandleBars">
          <i style={{ marginLeft: '2%' }}>
            <SiHandlebarsdotjs size={50} />
          </i>
        </Tooltip>
        <Tooltip title="React.js">
          <i style={{ marginLeft: '2%' }}>
            <FaReact size={50} />
          </i>
        </Tooltip>
        <Tooltip title="CSS">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoCss3 size={50} />
          </i>
        </Tooltip>
        <Tooltip title="JavaScript">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoJavascript size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Node.js">
          <i style={{ marginLeft: '2%' }}>
            <IoLogoNodejs size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Npm">
          <i style={{ marginLeft: '2%' }}>
            <FaNpm size={50} />
          </i>
        </Tooltip>
        <Tooltip title="GraphQL">
          <i style={{ marginLeft: '2%' }}>
            <SiGraphql size={50} />
          </i>
        </Tooltip>
        <Tooltip title="Apollo GraphQL">
          <i style={{ marginLeft: '2%' }}>
            <SiApollographql size={50} />
          </i>
        </Tooltip>
      </div>
      <div style={{ marginBottom: '8%' }} className="skills flex-wrap">
        <div className="container ">
          <div className="content-headings">
            <h2 className="headings"> Front end skills </h2>
          </div>
          <div className="p">
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>jQuery library</li>
              <li>Bootstrap CSS framework</li>
              <li>Skeleton CSS boilerplate</li>
              <li>Handlebars</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="content-headings">
            <h2 className="headings"> Backend skills </h2>
          </div>
          <div className="p">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>SQL databases, MySQL and the Sequelize ORM</li>
              <li>NoSQL databases such as MongoDB and the Mongoose ORM</li>
              <li>GraphQL</li>
              <li>Apollo</li>
              <li>Insomnia for API testing</li>
              <li>Heroku for deployment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
