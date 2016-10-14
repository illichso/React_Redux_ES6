import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {
  ManageCoursePage,
  titleErrorMsg,
  authorErrorMsg,
  categoryErrorMsg,
  lengthErrorMsg,
  emptyCourse} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save course with empty fields', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: emptyCourse
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe(titleErrorMsg);
    expect(wrapper.state().errors.authorId).toBe(authorErrorMsg);
    expect(wrapper.state().errors.category).toBe(categoryErrorMsg);
    expect(wrapper.state().errors.length).toBe(lengthErrorMsg);
  });
});
