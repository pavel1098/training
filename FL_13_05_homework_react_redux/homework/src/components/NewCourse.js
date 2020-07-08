import React from  'react'
import '../App.css'
import { connect } from "react-redux";
import { addAction } from "../actions/addAction"

class NewCourse extends React.Component {
  constructor(props) {
    super();

    this.state = {
      courses: [
        {
          id: null,
          date: '',
          name: '',
          description: '',
          duration: ''
        }
      ]
    }
  }

  handleChange = (e) => {
    this.setState({   
          [e.target.name]: e.target.value
    })
  }

  handelSubmit = (e) => {
    e.preventDefault();
    
    const id = Math.floor(Math.random() * 101);
    const courseData = {
      id: id,
      date: this.state.date,
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration
    }
    this.props.addCourseToList(courseData);
    this.setState({
      [e.target.name]: ''
    })
  }

 
         
  render() {
    console.log(this.props.course)
    return (
      <div className="wrapper">
        <h2 className="logo">New Course</h2>
          <form onSubmit={this.handelSubmit}>
            <div className="column-inputs large-inputs">
             <label>Title*</label>
              <input type="text" id="fname" name="name" autoComplete='off' onChange={this.handleChange} />
              <label>Description*</label>
              <textarea type="text" id="description"  autoComplete='off' name="description" cols='50' rows='8' onChange={this.handleChange}/>
            </div>
            <div className="short-inputs">
              <div className="column-inputs">
                <label>Duration*</label>
                <input type="text" id="fname" name="duration"  autoComplete='off' onChange={this.handleChange} />
                <label>Authors*</label>
                <input type="text" id="fname" name="authors"  autoComplete='off' onChange={this.handleChange}/>
              </div>
              <div className="calendar">
                <label>Date*</label>
                <input type="date" name='date'  autoComplete='off' onChange={this.handleChange} />
              </div>
            </div>
            <div className="btns">
              <button type='submit' className="add-btn save-btn">Save</button>
              <button type='submit' className="cancel-btn">Cancel</button>
            </div>
          </form>
      </div>
    )
  }
}



const mapDispatchToProps = {
  addCourseToList: addAction
}

export default connect(null, mapDispatchToProps)(NewCourse)