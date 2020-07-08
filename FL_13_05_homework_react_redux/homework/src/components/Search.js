import React from 'react'
import '../App.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-container">
        <input className="search-form" type="text" autoComplete="fasle" placeholder="&#xF002;  Search"/>
        <button className="add-btn" onClick={this.props.addCourse}>Add Course</button>
      </div>
    )
  }
}


