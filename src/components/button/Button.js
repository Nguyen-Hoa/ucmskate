import React from 'react';
import './button.css';

function Button(props) {
    return(
        <button
            onClick={props.onClick}
            className='button'
            style={props.style}
            disabled={props.disabled || false}
        >
            {props.label}
        </button>
    );
}

export default Button;