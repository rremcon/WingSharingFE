import React from 'react';

function LogoBig({className, img, imgTitle, onClick}) {

    return (

        <span className="image-wrapper-big">
        <img
            className={className}
            src={img}
            alt={imgTitle}
            onClick={onClick}
        />
        </span>
    );
}

export default LogoBig;