import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import './User.css'
import Image from './Image';
import Name from './Name';
import Place from './Place';
import Statistics from './Statistics/Statistics';
import FollowButton from './FollowButton';

const User = () => {
    return (
        <div className="User">
            <FontAwesomeIcon icon={faShareSquare} className="ShareIcon" size="sm" />
            <div className="grid-container">
                <div className="HeartIconContainer">
                    <FontAwesomeIcon icon={faHeart} className="HeartIcon" size="sm" />
                </div>
                <div className="UserImageContainer">
                    <Image src="https://pbs.twimg.com/profile_images/855486366699986944/uK_pmLVR_400x400.jpg" />
                </div>
                <div className="NameContainer">
                    <Name first="Smok" last="Tabaluga" />
                </div>
                <div className="PlaceContainer">
                    <Place city="Rajska Dolina" country="???" />
                </div>
            </div>
            <Statistics />
            <FollowButton />
        </div>
    )
};

export default User;
