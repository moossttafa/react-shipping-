import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FormHelperText } from '@material-ui/core'

import * as Yup from "yup";

export const Signup = () => {
  const paperStyle = { padding: "20px",  margin: "0px auto" };
  const headerStyle = { margin: "19px 0px; 0px" };
  const avatarStyle = { backgroundColor: "#5ac9fe " };
  const marginTop = { marginTop: 10 ,  };
  const initialValues = {
    name: "",
    email: "",
     phoneNumber: "",
    password: "",
    confirmPassword: "",
    termesAndCondation: false,
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It`s Too Short").required("Requird"),
    email: Yup.string().email("Enter Valid Email").required("Requird"),
     phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Requird"),
    password: Yup.string().min(8 , 'password minimum length shoud be 8' ).required("Requird"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "password not matched").required("Requird"),
    termesAndCondation: Yup.string().oneOf(["true"], "Accept Terms & Condation")
  });
  const onSubmit = (values, props) => {
    console.log(values)
    console.log(props)
    setTimeout(() => {

        props.resetForm()
        props.setSubmitting(false)
    }, 2000)
}

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                fullWidth
                label="Name"
                name="name"
                placeholder="Enter your name"
                helperText={<ErrorMessage name="name" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Email"
                name="email"
                placeholder="Enter your email"
                helperText={<ErrorMessage name="email" />}
              />
              
              <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
              <Field
                as={TextField}
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter your phone number"
                helperText={<ErrorMessage name="phoneNumber" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={TextField}
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                helperText={<ErrorMessage name="confirmPassword" />}
              />
              <FormControlLabel
                control={<Field as={Checkbox} name="termesAndCondation" />}
                label="I accept the terms and conditions."
              />
               <FormHelperText><ErrorMessage name="termesAndCondation" /></FormHelperText>
              <Button type="submit" variant="contained" disabled={props.isSubmitting}
                 color='#608daf'>
               {props.isSubmitting ? "Loading" : "Sign up"}
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};