import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
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
