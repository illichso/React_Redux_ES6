import {createSelector} from "reselect";

export function getFullAuthorName(author) {
  return author.firstName + ' ' + author.lastName;
}

export function authorsFormattedForDropdown(authors) {
    return authors.map(author => {
      return {
        value: author.id,
        text: getFullAuthorName(author)
      };
  });
}

export function getById(entries, id) {
  if (entries[0].id) {
    const object = entries.filter(entry => entry.id == id);
    if (object.length) {
      return object[0];
    }
    return null;
  }
  console.error("Entity don't have 'id' field to do search by entries, please provide properly formatted objects only"); // eslint-disable-line
  return null;
}

export function shouldShowList(list) {
  return list && list.length > 0;
}

const coursesSelector = state => state.courses;

export const sortCoursesByTitle = createSelector(
  coursesSelector,
  (courses) => [...courses].sort((a, b) => a.title < b.title ? -1 : 1)
);
