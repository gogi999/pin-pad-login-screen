import React from 'react';

const Button = ({ caption, action, isDisabled }) => {
    return (
        <button
            className="button"
            disabled={isDisabled}
            onClick={() => action(caption)}
        >
            {caption}
        </button>
    )
}

export default Button;
