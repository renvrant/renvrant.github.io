import React from 'react';
import { TechnologiesCard, SpeakingCard, ProjectCard, SocialCard, WritingCard } from '../components/cards';
import Contact from '../components/contact';

function Home() {
  return (
    <div className="container">

      <p className="intro h3">
        Hey there! I'm Renee Blackburn and I'm a Software Developer in Toronto, Canada.
        I've worked across the stack using JavaScript, HTML, CSS and PHP, but I specialize in front-end JavaScript work.
        I believe the web is for everyone. Inclusivity and accessibility in tech are both important topics to me.
        I also love video games, narrative design, and talking about all of the above to anyone who will listen.
      </p>
      <div className="flex flex-wrap card-list py3">
        <TechnologiesCard />
        <SpeakingCard />
        <WritingCard />
        <ProjectCard />
        <SocialCard />
      </div>

      <Contact />
    </div>
  );
}

export default Home;
