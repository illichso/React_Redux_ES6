export function createCourse(course) {
  console.log(`createCourse function on courseAction.js with title [${course.title}] before debugger`);
  debugger;
  console.log(`createCourse function on courseAction.js with title [${course.title}] after debugger`);
  return {type: 'CREATE_COURSE', course};
}
