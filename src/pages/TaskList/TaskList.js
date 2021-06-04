import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import AddTask from './../components/AddTask/AddTask';

class ProjectList extends Component {
	state = { 
    listOfProjects: [] 
  };

  render() {

    return(
      <div id="project-list">
        <AddTask />
        
        <div>
          {/* HERE WE DISPLAY ALL OF THE PROJECTS FROM THE API */}
        </div>

      </div>
    )
  }
}

export default ProjectList;