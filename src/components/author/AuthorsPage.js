import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';
import {browserHistory} from 'react-router';

class AuthorPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  authorRow (author, index) {
    <div key={index}>{author.firstName}</div>;
  }

  redirectToAddAuthorPage() {
    this.context.router.push('/author');
//    browserHistory.push('./author');
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
        <AuthorList authors={authors}/>
      </div>
    );
  }
}

AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

AuthorPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps){
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
