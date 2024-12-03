import React from 'react'
import { forminputes } from '../data/forminputes'
import CustomInput from './CustomInput'
import SubmitButton from './SubmitButton'
 
const RegisterForm = () => {
    return (
        <div>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form autoComplete="off" className="form">
                <h3 className="h3">Register Form</h3>
                {
                    forminputes.map((item) => (
                        <CustomInput key={item.id} type={item.type} label={item.label}   /> 
                    ))
                }
                <SubmitButton/>
            </form>
        </div>
    )
}

export default RegisterForm