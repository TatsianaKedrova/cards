import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {Button, FormWrapper} from "../../../main/ui/commonStyle";
import {useFormik} from "formik";
import {AppStateType} from "../../../main/bll/store";
import {loginTC} from "./login-reducer";

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppStateType, boolean>(state =>
        state.login.isAuth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }


            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 3) {
                errors.password = 'Must be 3 characters or more';
            }
            return errors;

        },
        onSubmit: values => {
            dispatch(loginTC(values.email, values.password, values.rememberMe))
            formik.resetForm()
        },
    })

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return ( <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">email</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />
            <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
            />
            <Button  type="submit">Submit</Button>
        </form>
        </FormWrapper>)
}
