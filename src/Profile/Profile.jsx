import React, { Component } from 'react';
import User from './User/User';
import Comments from './Comments/Comments';

import './Profile.css';


class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <User />
                <Comments />
            </div>
        );
    }
}

export default Profile;