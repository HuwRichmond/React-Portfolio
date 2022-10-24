import React from 'react';
import huw from '../../assets/images/portfolio_pic.png';
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
          <h2 className="headings">React Portfolio</h2>
        </div>
        <div className="about-card-container">
          <img src={huw} className="mypic" alt="huw"></img>
          <div className="p">
            <p>Sample text about Huw Richmond goes here.</p>
            <p>This is a portfolio made with react</p>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '5%', marginLeft: '5%' }}>
        <h1 style={{ color: '#e76f51ff', fontWeight: 'bold', fontStyle: 'italic' }}>SKILLS</h1>
        <br></br>
        <br></br>
        <h2 style={{ color: '#083c52' }}>Icons for languages</h2>
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
            <h2 className="headings"> My values </h2>
          </div>
          <div className="p">
            <ul>
              <li>Empathy</li>
              <li>Respect</li>
              <li>Loyalty</li>
              <li>Punctuality</li>
              <li>Consistancy</li>
              <li>Generosity</li>
              <li>Attention to detail</li>
              <li>Care for others</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="content-headings">
            <h2 className="headings"> What i bring </h2>
          </div>
          <div className="p">
            <ul>
              <li>A willingness to learn</li>
              <li>Attention to detail</li>
              <li>Team Player</li>
              <li>Creative ideas</li>
              <li>Respect for others</li>
              <li>Social Justice Value</li>
              <li>Open mind</li>
              <li>positive energy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
