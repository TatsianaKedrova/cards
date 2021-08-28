import React from 'react';
import {useFormik} from 'formik';
import Grid from "@material-ui/core/Grid";
import FormLabel from '@material-ui/core/FormLabel';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {useHistory} from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../main/bll/store";
import {isUserSignedUpTC, RequestStatusType} from "../../../main/bll/forgotReducer";
import ErrorSnackbar from "./ErrorSnackBar";

type ForgotProps = {}

const ForgotPassword: React.FC<ForgotProps> = React.memo(() => {

    //ForgotPassword component state
    const forgotStatus = useSelector<AppStateType, RequestStatusType>(state => state.forgot.status);
    const dispatch = useDispatch();

    const message =
        `<div style="background-color: lime; padding: 15px">
            password recovery link:
            <a href="http://localhost:3000/#/set-new-password/$token$">link</a> 
          </div>`
    //hooks
    let history = useHistory();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            dispatch(isUserSignedUpTC(values.email, "TatianaKedrova<Baletrot@gmail.com>", message))
        },
    });


    return <Container maxWidth="lg" style={{background: "linear-gradient(45deg, white, blue)", height: "50vh"}}>
        <Grid container direction={"column"} justifyContent={"center"} alignItems="center" spacing={3}>
            <Grid item xs={4}>
                <form onSubmit={formik.handleSubmit}>
                    <Box component="span" display="block" style={{marginTop: "20px", marginBottom: "10px"}}>
                        <FormLabel htmlFor="email" filled={true} focused={true}
                                   style={{fontSize: "40px", color: "white"}}>Forgot Password</FormLabel>
                    </Box>

                    <Box component="span" display="block">
                        <TextField
                            variant={"outlined"}
                            style={{marginTop: "20px", width: "100%"}}
                            id={"outlined-basic"}
                            type={"email"}
                            color={"primary"}
                            placeholder={"Email"}
                            {...formik.getFieldProps("email")}

                        />
                    </Box>
                    {forgotStatus === "loading" && <LinearProgress color={"secondary"}/>}
                    <ErrorSnackbar/>

                    <Button variant="contained"
                            color="primary"
                            type="submit"
                            style={{marginTop: "20px", width: "100%"}}
                            disabled={forgotStatus === "loading"}
                    >Send</Button>
                </form>

                <Button variant={"outlined"} color={"primary"}
                        style={{
                            border: "1px solid blue",
                            background: "linear-gradient(45deg, orange, pink)",
                            marginTop: "30px",
                            width: "100%"
                        }}
                        onClick={() => {
                            history.push('/login')
                        }}>Login
                </Button>


            </Grid>
        </Grid>
    </Container>
});


export default ForgotPassword;

