/* eslint-disable no-console */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';
import {getById, getFullAuthorName} from '../../selectors/selectors';
import toastr from 'toastr';

export class AuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, this.props.author),
      errors: {},
      deleting: false
    };

    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    this.deleteAuthor = this.deleteAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.author &&
      this.props.author.id != nextProps.author.id ) {
      // Necessary to populate from when existing author if loaded directly.
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  redirectToAddAuthorPage() {
    this.context.router.push('/author');
//    browserHistory.push('./author');
  }


  authorRow (author, index) {
    <div key={index}>{author.firstName}</div>;
  }

  deleteAuthor(event, author) {
    event.preventDefault();

    this.setState({author: author});
    this.setState({deleting: true});

    const canDeleteAuthor = this.checkIfAuthorCanBeDeleted(author.id);

    if(canDeleteAuthor){
      this.props.actions.deleteAuthor(author)
        .then(() => this.notifySuccessfulAuthorDeletion(author))
        .catch(error => {
          console.log(error);
          toastr.error(error);
          this.resetDeleteingValueInState();
        });
    } else {
      this.notifyNotSuccessfulAuthorDeletion(author);
    }
  }

  checkIfAuthorCanBeDeleted(authorId) {
    return this.props.courses.filter(course =>
      course.authorId == authorId).length == 0;
  }

  notifySuccessfulAuthorDeletion (author) {
    this.resetDeleteingValueInState();
    toastr.success(getFullAuthorName(author) + ' is deleted');
  }

  notifyNotSuccessfulAuthorDeletion (author) {
    this.resetDeleteingValueInState();
    toastr.warning(getFullAuthorName(author) + ' cannot be deleted because there are courses by this author');
  }

  resetDeleteingValueInState() {
    this.setState({deleting: false});
  }

  render () {
    const {authors} = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <input  type="submit"
                value="Add author"
                className="btn btn-primary"
                onClick={this.redirectToAddAuthorPage}/>
        <AuthorList
          authors={authors}
          onDelete={this.deleteAuthor}
          deleting={this.state.deleting}
          errors={this.state.errors}
          />
      </div>
    );
  }
}

AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  author: PropTypes.object,
  actions: PropTypes.object.isRequired
};

AuthorPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  const authorId = ownProps.params.id;
  let author = {id: '', firstName: '', lastName: ''};

  if (authorId && state.authors.length > 0) {
    author = getById(state.authors, authorId);
  }

  return {
    author: author,
    authors: state.authors,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
