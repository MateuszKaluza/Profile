import React from 'react';

import './Image.css';

const Image = (props) => {
    return (
        <div className="ImageContainer">
            <img src={props.src} alt={props.alt || 'User photo'} className={props.sm ? "Image Small" : "Image"} />
        </div>
    );
};

export default Image;