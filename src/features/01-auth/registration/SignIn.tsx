import React from 'react';
import {FormikProps} from "formik";
import {RegistrationInitValueType} from "./SignInContainer";
import style from './SignIn.module.css'
import {Button, FormWrapper} from "../../../main/ui/commonStyle";


type RegistrationPropsType = {
    formik: FormikProps<RegistrationInitValueType>


}

export const SignIn: React.FC<RegistrationPropsType> = ({formik}) => {
    return (

        <FormWrapper>
            <form onSubmit={formik.handleSubmit}>
                <h3>Email</h3>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />


                {formik.touched.email && formik.errors.email &&
                <div style={{color: 'red'}}>{formik.errors.email}</div>}
                <div className={style.password}>
                    <h3>Password</h3>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}

                <h3>Confirm Password</h3>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>}
                <div className={style.button}>
                    <Button type={'submit'}>Register</Button>
                    <Button onClick={() => formik.resetForm()} style={{left: '30px'}}>Cancel</Button>
                </div>





            </form>
        </FormWrapper>


    )
}


