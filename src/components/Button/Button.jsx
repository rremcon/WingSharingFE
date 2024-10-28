import React from 'react';


const Button = ({ className, type, clickHandler, disabled, children }) => {

    return (
        <button
            className={className}
            type={type}
            onClick={clickHandler}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;