import React from 'react'

const CustomInput = (props) => {
    const { label, ...others } = props


    return (
        <div className=' w-full'>
            <label htmlFor="username" className="label">
                {label}
            </label>
            <input
                {...others}
                className="input"
            />
        </div>
    )
}

export default CustomInput