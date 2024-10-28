import React from 'react';


function LogoRotating({className, img, imgTitle}) {

    return (

        <span className="image-wrapper-rotating">
        <img
            className={className}
            src={img}
            alt={imgTitle}
        />
        </span>

    );
}

export default LogoRotating;