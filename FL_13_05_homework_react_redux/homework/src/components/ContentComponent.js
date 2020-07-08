import React, { Component } from 'react';
import NewCourse from '../components/NewCourse'
import CoursesList from './CoursesList'
import Search from './Search'
import { connect } from 'react-redux'
import { changePage } from '../actions/changePage'

class ContentComponent extends Component {
  constructor(props) {
    super(props)
  }

  addCourse = (e) => {
    e.preventDefault();
    this.props.changePageToAdding();
  }

  render() {
    return (
      <>
          {
            this.props.isAdding === false
            ?
              <>
                <Search addCourse={this.addCourse} />
                <CoursesList />
              </>
            :
            <NewCourse  addCourse={this.addCourse}/>
          }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAdding: state.isAdding
  }
}

const mapDispatchToProps = {
  changePageToAdding: changePage 
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentComponent);

