import React from 'react';
import Card from './card';

function ProjectCard() {
  return (
    <Card title="Projects and Contributions" color="4">
      <ul>
        <li>
          <a href="http://www.niftyfish.ca" target="_blank">NiftyFish</a> +
                    <a href="http://tank.niftyfish.ca" target="_blank">NiftyFish Tank</a> @ <a href="http://www.tiff.net/exhibitions/nifty-fish">TIFF</a>
        </li>
        <li><a href="https://www.freshbooks.com" target="_blank">FreshBooks</a></li>
      </ul>
    </Card>
  );
}

export default ProjectCard;
