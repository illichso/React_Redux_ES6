export function createCourse(course) {
  console.log(`Inside createCourse function with titel [${course.title}]`);
  return {type: 'CREATE_COURSE', course};
}
