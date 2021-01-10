import React from 'react';
import ReactDOM from 'react-dom';
import './_variables.sass';
import './index.sass';
import Calculator from './Calculator';
import GithubCorner from 'react-github-corner';

const customHref = 'https://github.com/Th3Wall';

ReactDOM.render(
  <React.StrictMode>
    <Calculator />
    <GithubCorner 
      href={customHref}
      bannerColor="#ffffff"
      octoColor="#82C874"
      size={80}
      direction="right"
    />
  </React.StrictMode>,
  document.getElementById('root')
);