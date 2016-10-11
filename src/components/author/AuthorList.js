import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorList = ({authors, onDelete, deleting, errors}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th width="100px">&nbsp;</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author =>
        <AuthorListRow
          key={author.id} author={author}
          onDelete={onDelete}
          deleting={deleting}
          errors={errors}
          />
      )}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  deleting: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AuthorList;
