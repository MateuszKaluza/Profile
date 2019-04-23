import React from 'react';

import './Name.css';

const Name = (props) => {
    return (
        <span className={props.sm ? "Name Small" : "Name"} >{props.first} {props.last}</span>
    );
};

export default Name;