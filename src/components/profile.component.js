import React, { Component } from "react";
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getPostsCreater } from "../actions/postActions";
import Post from "./post";

class Profile extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { isLoggedIn: isLoggedIn, } = this.props;

    if (!isLoggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{isLoggedIn}</strong> Profile
          </h3>
        </header>

        <div> 
          <Link to={"/addPost"} className="btn btn-secondary" style={{ width: 200 }}>AddPost</Link>
        </div>
        <div>
          <div style={{ textAlign: "center", }}>
            {!this.props.posts.length && (
              <span style={{ width: 100, height: 100 }} className="spinner-border spinner-border-sm"></span>
            )}
          </div>
          <div className="main-div-" style={{ display: 'flex', flexDirection: 'row', width: 1200, flexWrap: "wrap" }}>
            {this.props.posts && this.props.posts.map((item, index) => <Post item={item} key={index} />)}
          </div>
        </div>
        {/* <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {isLoggedIn.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
        {/* <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Authorities:</strong>
        <ul>
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const posts = state.post;
  return {
    isLoggedIn,
    posts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPostsCreater())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));