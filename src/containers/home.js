import React from 'react';
import { Link } from 'react-router';
import Card from '../components/card';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="container">

      <p className="intro h3">
        Hey there! I'm Renee Vrantsidis and I'm a Web Developer in Toronto, Canada.
        I've worked across the stack using JavaScript, HTML, CSS and PHP, but I specialize in front-end JavaScript work.
        I believe the web is for everyone. Inclusivity and accessibility in tech culture are both important topics to me.
        I also love video games, narrative design, and talking about all of the above to anyone who will listen.
        Get in touch at renee@renvrant.com.
      </p>
      <div className="flex flex-wrap card-list py3">
        <Card title="Technologies" color="1">
          <ul>
            <li>Angular 2</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Webpack</li>
          </ul>
        </Card>

        <Card title="Speaking" color="2">
          <ul>
            <li>Designing Choice in Narrative Games <cite>Gamercamp 2015</cite></li>
            <li>
              <a href="http://www.longstorygame.com/post/78854753270/our-sxsw-14-panel-building-empathic-games-for" target="_blank">
              Building Empathic Games For Health Outcomes</a> <cite>SXSW 2014, Dames Making Games 2014</cite>
            </li>
            <li>Introduction to Web Design Workshop <cite>Centennial College 2012</cite></li>
          </ul>
        </Card>

        <Card title="Projects and Contributions" color="3">
          <ul>
            <li><a href="https://www.freshbooks.com" target="_blank">FreshBooks</a></li>
            <li><a href="https://mobile.drivetime.com" target="_blank">DriveTime</a></li>
            <li>
              <a href="http://www.niftyfish.ca" target="_blank">NiftyFish</a> +
              <a href="http://tank.niftyfish.ca" target="_blank">NiftyFish Tank</a>
            </li>
          </ul>
        </Card>

        <Card title="Writing" color="4">
          <ul>
            <li>
              <a href="https://angular-2-training-book.rangle.io/handout/a11y/" target="_blank">
              Angular 2 Accessibility</a>
            </li>
          </ul>
        </Card>

        <Card title="Social" color="5">
          <ul>
            <li><a href="https://www.github.com/renvrant/" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/renvrant" target="_blank">LinkedIn</a></li>
            <li><a href="http://codepen.io/renvrant/" target="_blank">CodePen</a></li>
            <li><a href="http://www.twitter.com/renvrant" target="_blank">Twitter</a></li>
          </ul>
        </Card>
      </div>

    </div>
  );
}

export default Home;
