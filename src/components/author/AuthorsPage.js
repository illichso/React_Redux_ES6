import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';
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

  authorRow (author, index) {
    <div key={index}>{author.firstName}</div>;
  }

  redirectToAddAuthorPage() {
    this.context.router.push('/author');
//    browserHistory.push('./author');
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.author.id
      != nextProps.author.id ) {
      // Necessary to populate from when existing author if loaded directly.
      this.setState({author: Object.assign({}, nextProps.author)});
    }
  }

  deleteAuthor(event) {
    event.preventDefault();

    this.setState({deleting: true});

    this.props.actions.deleteAuthor(this.state.author)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({deleting: false});
      });
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
          author={this.state.author}
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
  author: PropTypes.object,
  actions: PropTypes.object.isRequired
};

AuthorPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    authors: state.authors,
    author: state.author
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
