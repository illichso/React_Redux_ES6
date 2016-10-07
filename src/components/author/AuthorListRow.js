import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author, onDelete, deleting, errors}) => {
  return (
      <tr>
        <td><Link to={'/author/' + author.id}>{author.firstName}</Link></td>
        <td><Link to={'/author/' + author.id}>{author.lastName}</Link></td>
        <td><input
          type="submit"
          disabled={deleting}
          value={deleting ? 'Deleting...' : 'Delete'}
          className="btn btn-primary"
          onClick={event => onDelete(event, author)}/>
        </td>
      </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired,
  onDelete: React.PropTypes.func.isRequired,
  deleting: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default AuthorListRow;
