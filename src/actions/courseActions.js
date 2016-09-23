import* as types from './actionTypes';
export function createCourse(course) {
  console.log(`createCourse function on courseAction.js with title [${course.title}] before debugger`);
  debugger;
  console.log(`createCourse function on courseAction.js with title [${course.title}] after debugger`);
  return {type: types.CREATE_COURSE, course};
}
