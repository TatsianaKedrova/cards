import React from 'react';
import {useFormik} from 'formik';
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Redirect, useHistory, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {RequestStatusType} from "../../../main/bll/forgotReducer";
import LinearProgress from "@material-ui/core/LinearProgress";
import {isUserSignedUpTC} from "../../../main/bll/setNewPasswordReducer";

type NewPasswordProps = {}

type FormikErrorType = {
    password?: string
    confirmPassword?: string
}

const NewPassword: React.FC<NewPasswordProps> = () => {

    //recovery password state
    const newPasswordStatus = useSelector<AppStateType, RequestStatusType>(state => state.newPassword.status);
    const isNewPasswordSet = useSelector<AppStateType, boolean>(state => state.newPassword.isNewPasswordSet);
    const dispatch = useDispatch();

    //hooks
    const { token } = useParams<{token: string}>();
    console.log(token);
    let history = useHistory();
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if(!values.password) {
                errors.password = 'Required';
            } else if(values.password.length < 8) {
        errors.password = 'Password must be 8 characters or more';
    }
            if(!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if(values.password !== values.confirmPassword) {
                errors.confirmPassword = "Passwords must be the same"
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values);
            dispatch(isUserSignedUpTC(values.password, token));
        },
    });

    if(isNewPasswordSet) {
        return <Redirect to={'/login'} />
    }

    console.log(formik.values);
    return <Container maxWidth="lg" style={{background: "linear-gradient(45deg, white, blue)", height: "50vh"}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="span" display="block" style={{marginTop: "20px", marginBottom: "10px"}}>
                        <FormLabel htmlFor="email" filled={true} focused={true}
                                   style={{fontSize: "30px", color: "white"}}>Enter new password </FormLabel>
                    </Box>
                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"password"}
                            color={"primary"}
                            placeholder={"password"}
                            {...formik.getFieldProps("password")}

                        />
                    </Box>
                    {formik.touched.password && formik.errors.password ? <div style={{"color":"red"}}>{formik.errors.password}</div> : null}
                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"password"}
                            color={"primary"}
                            placeholder={"repeat password"}
                            {...formik.getFieldProps("confirmPassword")}
                        />

                    {formik.errors.confirmPassword ? <div style={{"color":"red"}}>{formik.errors.confirmPassword}</div> : null}
                    </Box>
                    {newPasswordStatus === "loading" && <LinearProgress color={"secondary"}/>}
                    <Button variant="contained" color="primary" type="submit"
                            style={{marginTop: "20px", width: "100%"}}
                            disabled={newPasswordStatus === "loading"}
                    >Set password</Button>
                </form>

                <Button variant={"outlined"} color={"primary"}
                        style={{
                            border: "1px solid blue",
                            background: "linear-gradient(45deg, orange, pink)",
                            marginTop: "30px",
                            width: "100%"
                        }}
                        onClick={() => {history.push('/login')}}>
                    Login
                </Button>

            </Grid>
        </Grid>
    </Container>
};

export default NewPassword;
