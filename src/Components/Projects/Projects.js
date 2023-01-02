import React from 'react';
import { Element } from 'react-scroll';
import './Projects.css';
// import Project from './Project.js'
import ReactHoverFlip from 'react-hover-flip';
const Projects = () => {
  const ArrayOfProjects = [
    {
      title: 'Automated Email for Vacancies created and approved',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate, CSS.',
      des: 'Every Monday an email will be send, in which the details of vacancy created and approved in last week will be displayed in the table format.',
    },
    {
      title: 'Automated Email for Offers issued',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate, CSS.',
      des: 'Every Monday an email will be send, in which the details of offers issued to the candidate in last week will be displayed in the table format.',
    },
    {
      title: 'Automated Email for Holiday Notification',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate, CSS.',
      des: 'Every Friday an email will be send, in which the list of holidays for the corresponding work location, for next week will be sort and displayed.',
    },
    {
      title: 'Mobile Application for Bay Allocation',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Apps, Power Automate and Sharepoint.',
      des: 'A mobile application which is used to store and update employees bay details in sharepoint list and in provided API by scanning QR code and selecting the corresponding employee.',
    },
    {
      title: 'Chatbot in Teams for Bay Allocation',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Virtual Agent, Power Automate and Sharepoint.',
      des: 'A chatbot which is used to store and update employees bay details in sharepoint list and in provided API by interacting with each and every employee through Teams.',
    },
    {
      title: 'Web Application for Bay Allocation',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Pages, HTML, CSS and Java Script.',
      des: 'Web application which is used to store and update employees bay details in provided API by selecting employee’s name and their corresponding bay number.',
    },
    {
      title: 'Automated Data Migration in Sharepoint',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate and Sharepoint.',
      des: 'An automated cloud flow is used to migrate bulk amount of files from one location of Sharepoint to another.',
    },
    {
      title: 'Chatbot in Teams',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Virtual Agent and Power Automate.',
      des: 'A chatbot that is used to interact with employees and provides their own official as well personal details either in the form of text or adaptive card.',
    },
    {
      title: 'Automated Resignation Notification',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate, HTML, CSS',
      des: 'An automatic notification will be sent in Outlook and in Teams, which displays the details of employee who applied resignation. And this notification will sent to the corresponding employee’s report level.',
    },
    {
      title: 'Digital ID Card',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automate and Power Virttual Agent.',
      des: 'Users can use the digital id card by sending request through chat bot and it will generate and display in the form of adaptive card.',
    },
    {
      title: 'Automated Email for Offers Issued to Corresponding Stack Holders',
      role: 'Developer',
      team_size: '5',
      skills_used: 'Power Automateand CSS.',
      des: 'Every Monday an email will be send to the coresponding stack holders, in which the details of offers issued to the candidate in last week will be displayed in the table format.',
    },
  ];

  return (
    <>
      <Element className="ProjectContainer" name="projects">
        <h1>Projects</h1>
        <div className="Container">
          {ArrayOfProjects.map((project, index) => {
            return (
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h1>{project.title}</h1>
                  </div>
                  <div className="flip-card-back">
                    <div className="PaddingContent">
                      <h2>{project.title}</h2>
                      <p>
                        <span>Role:</span> {project.role}
                        <br />
                        <span>Team Size:</span> {project.team_size}
                        <br />
                        <span>Skills Used:</span> {project.skills_used}
                        <br />
                        <span>Description:</span> {project.des}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Element>
    </>
  );
};

export default Projects;
