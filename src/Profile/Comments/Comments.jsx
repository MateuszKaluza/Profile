import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

import './Comments.css'

class Comments extends Component {
    render() {
        return (
            <div className="Comments">
                <div className="HideComments">Hide comments (353)</div>
               <div className="CommentsContainer">
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment /> 
               </div>
                <AddComment />
            </div>
        );
    }
};

export default Comments;