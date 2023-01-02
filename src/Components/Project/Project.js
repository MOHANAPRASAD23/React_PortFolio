import React from 'react';
import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactCardFlip,{YOUR_FRONT_CCOMPONENT,YOUR_BACK_COMPONENT } from 'react-card-flip';
// import './Project.css';

const Project = ({ title, role, team_size, skills_used, des }) => {
  const [showPro, setShowPro] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={showPro}
      onMouseEnter={() => setShowPro(true)}
      onMouseLeave={() => setShowPro(false)}
      flipDirection="vertical"
    >
      <YOUR_FRONT_CCOMPONENT>
        <h3>{title}</h3>
      </YOUR_FRONT_CCOMPONENT>
      <YOUR_BACK_COMPONENT>
        <h3>{title}</h3>
        <p>
          Role:{role}
          <br />
          Team Size:{team_size}
          <br />
          Skills Used:{skills_used}
          <br />
          Description:{des}
        </p>
      </YOUR_BACK_COMPONENT>
    </ReactCardFlip>
  );
};

export default Project;
