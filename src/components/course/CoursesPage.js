import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
    console.log(`onTitleChange function on CoursePage.js with course[${course}]; title[${course.title}]; state [${this.state}] before  debugger`);
    debugger;
  }

  onClickSave(){
    console.log(`onClickSave function on CoursePage.js with title[${this.state.course.title}] before 1st debugger`);
    debugger;
    console.log(`onClickSave function on CoursePage.js  with title[${this.state.course.title}] after 1st debugger before dispatching`);
    this.props.actions.createCourse(this.state.course);
    console.log(`onClickSave function on CoursePage.js  with title[${this.state.course.title}] after  dispatching, before 2st debugger`);
    debugger;
    console.log(`onClickSave function on CoursePage.js  with title[${this.state.course.title}] after 2st debugger`);
  }
  courseRow (course, index) {
    console.log(`courseRow function on CoursePage.js with Course title is [${course.title}]; index=[${index}]`);
    debugger;
     <div key={index}>{course.title}</div>;
    console.log(`Exiting function on CoursePage.js with Course title is [${course.title}]; index=[${index}]`);
  }

  render (){
    console.log(`render function on CoursePage.js before debugger`);
    debugger;
    console.log(`render function on CoursePage.js after debugger`);
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  console.log(`mapStateToProps function on CoursePage.js before debugger`);
  debugger;
  console.log(`mapStateToProps function on CoursePage.js After debugger`);
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  console.log(`!!!mapDispatchToProps function on CoursePage.js before debugger`);
  debugger;
  console.log(`!!!mapDispatchToProps function on CoursePage.js After debugger`);
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
