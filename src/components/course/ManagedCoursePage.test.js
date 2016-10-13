import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it('sets error message when trying to save course with empty fields', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => {return Promise.resolve();}},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Course should have a title.');
    expect(wrapper.state().errors.authorId).toBe('Course should have an author.');
    expect(wrapper.state().errors.category).toBe('Course should have a category.');
    expect(wrapper.state().errors.length).toBe('Course should have a length.');
  });
});
