import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { item, index } = this.props;
        return (
            <div key={index} className="card" style={{height: 240, width: 200, marginLeft: 5}}>
                <div className="card-body" >
                    <p style={{fontWeight: 'bold'}}>{item.title}</p>
                    <p>{item.content}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    }
}

export default Post;