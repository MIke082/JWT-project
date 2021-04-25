import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { item, index } = this.props;
        return (
            <div key={index} className="card  ml-3" >
                <div className="card-body p-2 " >
                    <p className="font-weight-bold">Title: {item.title}</p>
                    <p>Content: {item.content}</p>
                    <p>Description: {item.description}</p>
                </div>
            </div>
        );
    }
}

export default Post;