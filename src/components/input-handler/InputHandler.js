import React from 'react'
import classnames from 'classnames'
const InputHandler = ({type,name,value,lebel,onChange,error}) => {
    return (

        <div className='form-group'>
            <lebel htmlFor={name}>{lebel} </lebel>
            <input className={classnames('form-control', {'is-invalid':error})} type={type} name={name} value={value} onChange={onChange} />
        
        <div className='invalid-feedback'>{error} </div>
        </div>
    )
}

export default InputHandler
