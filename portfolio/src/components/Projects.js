import React from 'react';
import './project.css';

const Projects = () => {
  return (
    <>
    <div className="project-page" id='projectss'>
      <h2 className='heading'>Projects</h2>
      <div id="bar"></div><br/>
      <div className="project-page2">
      <h2 className="proj1">TODO list</h2> 
      <div id="bar"></div><br/>
        <div className="proj1desc">TODO list an application which is designed and implemented using React Js, offering a robust solution for efficient task management
        throughout the day. The application enables users to systematically track and organize their daily tasks, enhancing productivity and
        organization by giving popups and alerts to the user.
</div> 
    <h2 className="proj2">ROCK PAPER SCISSORS</h2> 
      <div id="bar"></div><br/>
    <div className='proj2desc'>Rock, Paper, Scissors game where both the user and the computer engage in strategic choices. A victorious outcome awards a point to the
    winner, contributing to their cumulative score</div>
    <h2 className="proj3">TIC TAC TOE</h2>
      <div id="bar"></div><br/>
    <div className="proj3desc">Tic Tac Toe, skillfully crafted with HTML, CSS, and JavaScript. Challenge yourself against a sophisticated computer opponent that strategically
    determines its next move. Immerse yourself in this classic game with a seamless user interface and intelligent computer gameplay for a
    captivating and enjoyable experience.
    <h2 className="proj4">color game</h2>
      <div id="bar"></div><br/>
    <div className="proj4desc">Color Game is an engaging web application developed with HTML, CSS, and JavaScript. This interactive experience challenges users to
accurately identify and type the color of displayed text, rewarding correct responses with scores</div>
</div>
</div>
</div>
    </>
  );
};

export default Projects;
