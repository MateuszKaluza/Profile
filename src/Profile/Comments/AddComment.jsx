import React, { Component } from 'react';
import './AddComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

class AddComment extends Component {
    render() {
        return (
            <div>
                <textarea className="AddComment" type="text" placeholder="Add a comment" />
                <FontAwesomeIcon icon={faPaperPlane} size="sm" className="SendIcon" title="Send"/>
            </div>
        );
    };
}

export default AddComment;