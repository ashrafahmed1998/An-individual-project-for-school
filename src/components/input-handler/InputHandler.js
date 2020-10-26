import React from 'react'

const InputHandler = ({type,name,value,lebel,onChange}) => {
    return (
        <div className='form-group'>
            <lebel htmlFor={name}>{lebel} </lebel>
            <input className='form-control' type={type} name={name} value={value} onChange={onChange} />
        </div>
    )
}

export default InputHandler
