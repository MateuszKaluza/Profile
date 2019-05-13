import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Statistics.css';

class Statistics extends Component {
    render() {
        return (
            <div className="Statistics">
                <div className="container">
                    <div className="a-wVogA-0 StatisticsValue" >{this.props.likesCount}</div>
                    <div className="a-ANRO2-0 Spacer"></div>
                    <div className="a-6XDVv-0 StatisticsValue">723</div>
                    <div className="a-lxZ6m-0 Spacer Second"></div>
                    <div className="a-E8YQ2-0 StatisticsValue">{this.props.followersCount}</div>
                    <div className="a-wVogA-1 StatisticsType">Likes</div>
                    <div className="a-6XDVv-1 StatisticsType">Following</div>
                    <div className="a-E8YQ2-1 StatisticsType">Followers</div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        likesCount: state.likes,
        followersCount: state.followers
    }
}
export default connect(mapStateToProps)(Statistics);