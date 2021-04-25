import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewPostCreater } from '../actions/postActions';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { history } from '../helpers/history';

class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "",
            "content": "",
            "description": ""
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
            <div className="col-12">
                <div className="card card-container">
                    <Form>
                        <div className="form-group">
                            <div className="col-12">
                                <label htmlFor="Title">Title</label>
                                <Input
                                    className="form-control"
                                    name="title"
                                    type="text"
                                    value={this.state.title}
                                    onChange={this.onChangeTitle}
                                    placeholder={'Title'}
                                />
                            </div>
                            <div className="col-12" >
                                <label htmlFor="Content">Content</label>
                                <Input
                                    className="form-control"
                                    name="content"
                                    type="text"
                                    value={this.state.content}
                                    onChange={this.onChangeContent}
                                    placeholder={'Content'}
                                />
                            </div>
                            <div className="col-12" >
                                <label htmlFor="Description">Description</label>
                                <Input
                                    className="form-control"
                                    name="description"
                                    type="text"
                                    value={this.state.description}
                                    onChange={this.onChangeDescription}
                                    placeholder={'Description'}
                                />
                            </div>
                            <div className="mt-2 col-12">
                                <button type="submit" className="btn btn-primary btn-block " onClick={() => this.props.createPost(this.state)}>Add Post</button>
                            </div>
                            <div className="mt-2 col-12">
                                <button className="btn btn btn-secondary btn-block " onClick={()=> history.push('profile')}>Back to profile</button>
                            </div>
                        </div>

                    </Form>
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