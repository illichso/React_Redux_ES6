import* as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      console.log(`courseReducer function on courseReducer.js with 'CREATE_COURSE' switch with action.type [${action.type}] and action.course [${action.course.title}] before debugger`);
      debugger;
      console.log(`courseReducer function on courseReducer.js with 'CREATE_COURSE' switch with action.type [${action.type}] and action.course [${action.course.title}] after debugger`);
      return [...state,
        Object.assign({}, action.course)
        ];
    default:
      return state;
  }
}
