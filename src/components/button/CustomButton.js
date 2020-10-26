import React from 'react';
import './customButton.scss'

const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className='button-container' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
