import React from 'react'
import Course from './Course'
import '../App.css';
import { connect } from "react-redux";
import { deleteAction } from "../actions/deleteAction"

class CoursesList extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteCourse = (id, e) => {
    e.preventDefault();
    this.props.deleteCourseFromList(id)
  }


  render() {
    return (
      <div className="container">
        {
          this.props.coursesList.map((item) => {
            return <Course  
                    key={item.id} 
                    course={item} 
                    deleteCourse={this.deleteCourse}/>
          })
        }   
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    coursesList: state.courses
  }
}

const mapDispatchToProps = {
  deleteCourseFromList: deleteAction
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesList)