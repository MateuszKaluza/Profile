import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import { connect } from 'react-redux';
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
                <div onClick={this.handleToggle} className="HideComments">{this.state.toggleComments ? 'Hide' : 'Show'} comments ({this.props.comments.length})</div>
                {this.state.toggleComments &&

                    <div className="CommentsContainer">
                        {this.props.comments.map((comment, index) => {
                            return <Comment key={index} text={comment.text} />
                        })}
                    </div>}
                <AddComment />
            </div>
        );
    }

    handleToggle = () => {
        this.setState(prevState => ({ toggleComments: !prevState.toggleComments }));
    }
};

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comments);