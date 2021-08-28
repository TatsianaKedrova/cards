import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {useFormik} from "formik";
import {onRegistrationTS} from "../../../main/bll/auth-reducer";
import {SignIn} from "./SignIn";
import {FlexColumnCenter} from "../../../main/ui/commonStyle";


export type RegistrationInitValueType = {
    email: string,
    password: string,
    confirmPassword: string
}

type ErrorType = {
    email?: string
    password?: string
}

export const SignInContainer: React.FC = () => {
    const dispatch = useDispatch()

    const formik = useFormik<RegistrationInitValueType>({
        validate: (values) => {
            const error: ErrorType = {}
            if (!values.email) {
                error.email = 'Required'
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                error.email = 'Invalid email address'
            }

            if (!values.password) {
                error.password = 'Require'
            } else if (values.password.length > 15) {
                error.password = 'The length of password'
            }
            return error;

        },
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        } as RegistrationInitValueType,
        onSubmit: values => {
            if (values.password !== values.confirmPassword) {
                throw new Error('Passwords are not the same')
            }
            dispatch(onRegistrationTS(values.email, values.password));
            formik.resetForm()
        },
    })

    // if (isRegistered) {
    //     return <Redirect to={"/login"} />
    // }
    return (
        <FlexColumnCenter>

            <SignIn formik={formik}/>

        </FlexColumnCenter>


    )
}


