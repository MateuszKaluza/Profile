import React, { Component } from 'react';
import { connect } from 'react-redux';

import './FollowButton.css';
import * as actionTypes from './../../store/action';

class FollowButton extends Component {
    constructor(props) {
        super(props);
        this.state = { toggleFollow: false };
        this.handleToggle = this.handleToggle.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleToggle} className="FollowButton">{this.state.toggleFollow ? 'Unfollow' : 'Follow'}</button>
        );
    }

    handleToggle() {
        this.props.toggleFollowers(this.state.toggleFollow);
        this.setState(prevState => ({ toggleFollow: !prevState.toggleFollow }));
    }

}

const mapDispatchToState = dispatch => {
    return {
        toggleFollowers: (toggleFollow) => {
            const action = toggleFollow ? actionTypes.unfollow : actionTypes.follow;
            dispatch(action());
        }
    }
}

export default connect(null, mapDispatchToState)(FollowButton);