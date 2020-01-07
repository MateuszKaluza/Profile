import React, { Component } from 'react';
import './AddComment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import * as actionTypes from './../../store/action';

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = { commentText: '' };
    }

    handleChange = (event) => {
        this.setState({ commentText: event.target.value });
    }

    addComment = () => {
        this.props.addComment(this.state.commentText);
    }

    render() {
        return (
            <div>
                <textarea value={this.state.commentText} onChange={this.handleChange} className="AddComment" type="text" placeholder="Add a comment" />
                <FontAwesomeIcon onClick={this.addComment} icon={faPaperPlane} size="sm" className="SendIcon" title="Send" />
            </div>
        );
    };
}


const mapDispatchToProps = dispatch => {
    return {
        addComment: (text) => {
            dispatch(actionTypes.addCommnet({ text }));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddComment);