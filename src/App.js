import React from 'react';
import './style.css';
import Header from './Components/Header/Header.js';
import About from './Components/AboutContent/AboutContent.js';
import Skill from './Components/Skills/Skill.js';
import Education from './Components/Education/Education.js';
import Projects from './Components/Projects/Projects.js';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Skill />
      <Projects />
    </div>
  );
};
// export default function App() {
//   return (
//     <Header/>
//   );
// }
export default App;
