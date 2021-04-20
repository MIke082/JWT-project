import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewPostCreater } from '../actions/postActions';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            description: ''
        }
    }

    onChangeTitle = (e) => {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeContent = (e) => {
        this.setState({
            content: e.target.value,
        });
    }

    onChangeDescription = (e) => {
        this.setState({
            description: e.target.value,
        });
    }
    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h4 > Add new post </h4>
                <div className="col-4" style={{ marginTop: 10 }}>
                    <input
                        className="form-control"
                        name="title"
                        type="text"
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        placeholder={'Title'}
                    />
                </div>
                <div className="col-4" style={{ marginTop: 10 }}>
                    <input
                        className="form-control"
                        name="content"
                        type="text"
                        value={this.state.content}
                        onChange={this.onChangeContent}
                        placeholder={'Content'}
                    />
                </div>
                <div className="col-4" style={{ marginTop: 10 }}>
                    <input
                        className="form-control"
                        name="description"
                        type="text"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        placeholder={'Description'}
                    />
                </div>
                <div style={{ marginTop: 10 }}>
                    <button type="submit" className="btn btn-primary" onClick={() => this.props.createPost(this.state)}>Add Post</button>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => {
            console.log(post);
            dispatch(createNewPostCreater(post))
        }
    }
}
export default connect(null, mapDispatchToProps)(AddPost);