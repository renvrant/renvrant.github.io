import React from 'react';
import Card from './card';

function SocialCard() {
  return (
    <Card title="Social" color="5">
      <ul>
        <li><a href="https://www.github.com/renvrant/" target="_blank">Github</a></li>
        <li><a href="https://www.linkedin.com/in/renvrant" target="_blank">LinkedIn</a></li>
        <li><a href="http://codepen.io/renvrant/" target="_blank">CodePen</a></li>
        <li><a href="http://www.twitter.com/renvrant" target="_blank">Twitter</a></li>
      </ul>
    </Card>
  );
}

export default SocialCard;
