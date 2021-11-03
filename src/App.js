import React from 'react';
import './App.css';
import {profile, experiences, hobbies, skills, projects} from './data'
import Profiles from './components/Profile'
import Experience from './components/Experience';
import Hobbie from './components/Hobbie'
import Skill from './components/Skill';
import Project from './components/Project'
function  App() {
    return (
      <div className="App">
        <div className="container">
          <div className="grid">
            <div className="left">
              <Profiles profile={profile}/>
              <Experience title='Experiences' experiences={experiences}/>
              {/* <Hobbie title='Hobbies' hobbies={hobbies}/> */}
            </div>
            <div className='right'>
              <Skill skills={skills}/>
              <Project projects={projects} title='projects'/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
