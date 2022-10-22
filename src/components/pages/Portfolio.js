import React from 'react';
import Project from '../Project';
import merch from '../../assets/images/merch.png';
import what from '../../assets/images/what.png';
import text from '../../assets/images/text.png';
import work from '../../assets/images/work.png';
import note from '../../assets/images/note.png';
import weather from '../../assets/images/weather.png';

function Work() {
  return (
    <div className="content-headings">
      <h2 className="headings">Work</h2>
      <p className="p">
        Samples of some projects i have developed. Full repositories are on my Github page.
        <br></br>
        Click on the icon to view the deployed application.
      </p>
    </div>
  );
}

export default function Portfolio() {
  const projects = [
    {
      title: 'Merchant Game',
      description:
        'This is a game made with MySQL and uses Handlebars.js as the template engine.',
      deployedURL: 'https://ascrivener-merchant-game.herokuapp.com',
      repoURL: 'https://github.com/Wombattree/MerchantGame',
      imageURL: merch
    },
    {
      title: 'Whats On',
      description:
        'This is a movie app that uses imdb API to display icons with search functionality.',
      deployedURL: 'https://jkoufalas.github.io/WhatsOn/index.html',
      repoURL: 'https://github.com/jkoufalas/WhatsOn',
      imageURL: what
    },
    {
      title: 'Text Editor',
      description:
        'This is a text editor that runs in the browser.',
      deployedURL: 'https://young-reef-49269.herokuapp.com/',
      repoURL: 'https://github.com/HuwRichmond/Progressive-Web-Applications-PWA-Text-Editor',
      imageURL: text
    },
    {
      title: 'Work day scheduler',
      description: 'A daily calendar application.',
      deployedURL: 'https://huwrichmond.github.io/Work_Day_Scheduler/',
      repoURL: 'https://github.com/HuwRichmond/Work_Day_Scheduler',
      imageURL: work
    },
    {
      title: 'Note Taker',
      description:
        'This allows users to record, save and delete notes when using the application.',
      deployedURL: 'https://huw-richmond-note-taker.herokuapp.com/',
      repoURL: 'https://github.com/HuwRichmond/expressjs-note-taker',
      imageURL: note
    },
    {
      title: 'Weather App',
      description:
        'This allows users to view weather forecasts by the searched city.',
      deployedURL: 'https://huwrichmond.github.io/Weather_App/',
      repoURL: 'https://github.com/HuwRichmond/Weather_App',
      imageURL: weather
    },
  ];

  return (
    <div>
      <Work />
      {projects.map((p) => {
        return (
          <Project
            key={p.title}
            title={p.title}
            description={p.description}
            deployedURL={p.deployedURL}
            repoURL={p.repoURL}
            imageURL={p.imageURL}
          />
        );
      })}
    </div>
  );
}
