import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

import './Comments.css'

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = { toggleComments: true };
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        return (
            <div className="Comments">
                <div onClick={this.handleToggle} className="HideComments">{this.state.toggleComments ? 'Hide' : 'Show'} comments (353)</div>
                {this.state.toggleComments && <div className="CommentsContainer">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>}
                <AddComment />
            </div>
        );
    }

    handleToggle = () => {
        this.setState(prevState => ({ toggleComments: !prevState.toggleComments }));
    }
};

export default Comments;