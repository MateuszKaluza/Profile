import React from "react";

import './Place.css';

const Place = (props) => {
    return (
        <span className="Place">{props.city}, {props.country}</span>
    );
};

export default Place;