import React, { Component } from 'react';
import axios from 'axios';

class AddTask extends Component {
  constructor(props){
      super(props);
      this.state = { title: "", body: "" };
  }
   
  handleFormSubmit = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleChange = (event) => {
    event.preventDefault();
    const {title, body } = this.state;
     
    axios.post("http://localhost:5000/api/projects", { title, body })
    .then( () => {
      // this.props.getData(); // leave this comment - we will used it later
      this.setState({title: "", body: ""});
    })
    .catch( (err) => console.log(err) )  
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          
          <label>Title:</label>
          <input type="text" 
            name="title" 
            value={this.state.title} 
            onChange={ (e) => this.handleChange(e) }
          />
          
          <label>Body:</label>
          <textarea 
            name="body" 
            value={this.state.body} 
            onChange={ (e) => this.handleChange(e) } 
          />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddTask;