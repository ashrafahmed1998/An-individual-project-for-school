import React from 'react'

const Review = ({value}) => {
    return (
        <>
            <i className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fad fa-start-half-alt' : value ===0 ? 'fal fa-star': ''} />
            <i className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fad fa-start-half-alt' : value ===0 ? 'fal fa-star': ''} />
            <i className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fad fa-start-half-alt' : value ===0 ? 'fal fa-star': ''} />
            <i className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fad fa-start-half-alt' : value ===0 ? 'fal fa-star': ''} />
            <i className={ value >=1 ? 'fas fa-star': value >= 0.5 ? 'fad fa-start-half-alt' : value ===0 ? 'fal fa-star': ''} />
        </>
    )
}

export default Review

// Review.defaultProps={
//     color: yellow
// }