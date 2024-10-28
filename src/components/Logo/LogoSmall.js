import React from 'react';

function LogoSmall({className, img, imgTitle, onClick}) {

    return (

        <span className="image-wrapper-small">
        <img
            className={className}
            src={img}
            alt={imgTitle}
            onClick={onClick}
        />
        </span>
    );
}

export default LogoSmall;