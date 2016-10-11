import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(course) {
  return {type: types.DELETE_COURSE_SUCCESS, course};
}

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      console.log(error);
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      console.log(error);
      throw(error);
    });
  };
}

export function deleteCourse(course) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return courseApi.deleteCourse(course.id).then(courses => {
      dispatch(deleteCourseSuccess(course));
    }).catch((error) => {
      console.log(error);
      throw(error);
    });
  };
}
