import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


import './User.css'
import Image from './Image';
import Name from './Name';
import Place from './Place';
import Statistics from './Statistics/Statistics';
import FollowButton from './FollowButton';
import * as actionTypes from './../../store/action';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = { toggleHeart: false };
        this.handleShareIcon = this.handleShareIcon.bind(this);
        this.handeleHeartIcon = this.handeleHeartIcon.bind(this);
    };


    render() {
        return (
            <div className="User">
                <FontAwesomeIcon icon={faShareSquare} className="ShareIcon" size="sm" onClick={this.handleShareIcon} title="Share" />
                <div className="grid-container">
                    <div className="HeartIconContainer">
                        <FontAwesomeIcon
                            onClick={this.handeleHeartIcon}
                            icon={this.state.toggleHeart ? fasHeart : faHeart}
                            className="HeartIcon"
                            size="sm"
                            title={this.state.toggleHeart ? 'Unlike' : 'Like'} />
                    </div>
                    <div className="UserImageContainer">
                        <Image src="https://pbs.twimg.com/profile_images/855486366699986944/uK_pmLVR_400x400.jpg" />
                    </div>
                    <div className="NameContainer">
                        <Name first="Smok" last="Tabaluga" />
                    </div>
                    <div className="PlaceContainer">
                        <Place city="Rajska Dolina" country="CHGW" />
                    </div>
                </div>
                <Statistics />
                <FollowButton />
            </div>
        )
    }

    handleShareIcon() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };

    handeleHeartIcon() {
        this.props.toggleLikes(this.state.toggleHeart);
        this.setState((prevState) => ({
            toggleHeart: !prevState.toggleHeart
        }));

    }
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLikes: (toggleHeart) => {
            const action = toggleHeart ? actionTypes.decrementLikes : actionTypes.increnmentLikes
            dispatch(action());
        }
    }
}

export default connect(null, mapDispatchToProps)(User);
