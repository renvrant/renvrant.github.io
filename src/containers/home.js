import React from 'react';
import { Link } from 'react-router';
import Card from '../components/card';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="container">

      <p className="intro h3">
        Hey there! I'm Renee Vrantsidis and I'm a JavaScript Developer in Toronto, Canada.
        I've worked across the stack using JavaScript, HTML, CSS and PHP, but I specialize in front-end JavaScript work.
        I believe the web is for everyone. Inclusivity and accessibility in tech are both important topics to me.
        I also love video games, narrative design, and talking about all of the above to anyone who will listen.
        Get in touch at renee@renvrant.com.
      </p>
      <div className="flex flex-wrap card-list py3">
        <Card title="Technologies" color="1">
          <ul>
            <li>Angular</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>Node</li>
            <li>Webpack</li>
          </ul>
        </Card>

        <Card title="Speaking" color="2">
          <ul>
            <li><a href="https://youtu.be/_MrOw8iywC8?t=9500" target="_blank">
                FormControl Freaks: Redux Edition</a> <cite>ng-conf 2017</cite></li>
            <li>Designing Choice in Narrative Games <cite>Gamercamp 2014</cite></li>
            <li>
              <a href="http://www.longstorygame.com/post/78854753270/our-sxsw-14-panel-building-empathic-games-for" target="_blank">
                Building Empathic Games For Health Outcomes</a> <cite>SXSW 2014, Dames Making Games 2014</cite>
            </li>
          </ul>
        </Card>

        <Card title="Projects and Contributions" color="3">
          <ul>
            <li>
              <a href="http://www.niftyfish.ca" target="_blank">NiftyFish</a> +
              <a href="http://tank.niftyfish.ca" target="_blank">NiftyFish Tank</a> @ <a href="http://www.tiff.net/exhibitions/nifty-fish">TIFF</a>
            </li>
            <li><a href="https://www.freshbooks.com" target="_blank">FreshBooks</a></li>
            <li><a href="https://mobile.drivetime.com" target="_blank">DriveTime</a></li>
          </ul>
        </Card>

        <Card title="Writing" color="4">
          <ul>
            <li><a href="https://angular-2-training-book.rangle.io/handout/architect/functional_forms.html" target="_blank">Functional Forms in Angular</a></li>
            <li>
              <a href="https://angular-2-training-book.rangle.io/handout/a11y/" target="_blank">
              Angular Accessibility</a>
            </li>
            {/*<li>*/}
              {/*<a href="https://medium.com/@renvrant/teach-determination-not-code-e383f5b65a90#.nfdypf6s0" target="_blank">*/}
              {/*Teach determination, not code</a>*/}
            {/*</li>*/}
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

      <Contact />
    </div>
  );
}

export default Home;
