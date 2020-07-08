import React from "react";
import "../App.css";
import { ReactComponent as IconDelete } from "../images/delete.svg";
import { ReactComponent as IconEdit } from "../images/edit.svg";

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      isEditing: false
    }
  }
  showMenu = (event) => {
    event.preventDefault();
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    })
  }

   closeMenu = () => {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
  }

  editCourse = (id, e) => {
    e.preventDefault();
    this.props.editingCourseFromList(id)
  }

  render() {
    const { course } = this.props
    return (
      <div  className="course-item">
        <span className="item-date">{course.date}</span>
        <span className="item-name">{course.name}</span>
        <span className="item-description">{course.description}</span>
        <span className="item-duration">
          {course.duration}
          <i className="fa fa-ellipsis-h" onClick={this.showMenu}></i>
          {this.state.showMenu ? (
            <div
              className="drop-down-menu"
              ref={(element) => {
                this.dropdownMenu = element;
              }}
            >
              <div className="edit">
                <div onClick={(e) => {this.props.deleteCourse(course.id, e)}}>
                  <IconDelete />
                  <span>Delete</span>
                </div>
                <div onClick={(e) => {this.editCourse(course.id, e)}}>
                  <IconEdit />
                  <span>Edit</span>
                </div>
              </div>
            </div>
          ) : null}
        </span>
      </div>
    );
  }
}



export default Course;
