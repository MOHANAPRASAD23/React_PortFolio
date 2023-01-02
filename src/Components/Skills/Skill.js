import React from 'react';
import { Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import './Skill.css';
const Skill = () => {
  return (
    <Element name="skills" className="Skills">
      <h1>Skills</h1>
      <div className="SkillContainer">
          <h5>C</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>C++</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>HTML</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>CSS</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Java Script</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Power Automate</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Power Apps</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Power Virtual Agent</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Power Pages</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>SharePoint</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>React JS</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Dynamics365</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Photoshop</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Adobe Illustrator</h5>
          <LinearProgress variant="determinate" value={75} />
          <h5>Blender</h5>
          <LinearProgress variant="determinate" value={75} />
      </div>
    </Element>
  );
};

export default Skill;
