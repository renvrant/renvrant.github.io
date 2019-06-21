import React from 'react';
import Card from './card';

function ProjectCard() {
  return (
    <Card title="Projects and Contributions" color="4">
      <ul>
        <li><a href="http://renvrant.com/tarot-me" target="_blank">Tarot Me!</a></li>
        <li>
          <a href="https://artscience.ca/work/nifty-fish/" target="_blank">NiftyFish</a>
        </li>
        <li><a href="https://www.freshbooks.com" target="_blank">FreshBooks</a></li>
        <li><a href="https://www.jetblue.com" target="_blank">JetBlue</a></li>
      </ul>
    </Card>
  );
}

export default ProjectCard;
