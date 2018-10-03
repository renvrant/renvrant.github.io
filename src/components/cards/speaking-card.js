import React from 'react';
import Card from './card';

function SpeakingCard() {
  return (
    <Card title="Speaking" color="2">
      <ul>
        <li>
          <a href="https://fitc.ca/presentation/composing-components-in-angular/" target="_blank">
            Composing Components in Angular
          </a> <cite>FITC Web Unleashed 2018</cite></li>
        <li><a href="https://youtu.be/_MrOw8iywC8?t=9500" target="_blank">
            FormControl Freaks: Redux Edition</a> <cite>ng-conf 2017</cite></li>
        <li>Designing Choice in Narrative Games <cite>Gamercamp 2014</cite></li>
        <li>
          <a
            href="http://www.longstorygame.com/post/78854753270/our-sxsw-14-panel-building-empathic-games-for"
            target="_blank"
          >
              Building Empathic Games For Health Outcomes</a> <cite>SXSW 2014, Dames Making Games 2014</cite>
        </li>
      </ul>
    </Card>
  );
}

export default SpeakingCard;
