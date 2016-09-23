export default function courseReducer(state = [], action) {
  switch(action.type) {
    case 'CREATE_COURSE':
      console.log(`Inside 'CREATE_COURSE' switch with action.type [${action.type}] and action.course [${action.course.title}]`);
      return [...state,
        Object.assign({}, action.course)
        ];
    default:
      return state;
  }
}
