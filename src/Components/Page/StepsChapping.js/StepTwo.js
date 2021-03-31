import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link
} from "@material-ui/core";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import IntlTelInput from "react-intl-tel-input";

const requiredStyle = {color: "red"}

const poperStyle = {
  padding: 20,
  height: "auto",
  width: "auto",
  margin: "0px auto",
};

function StepOne  () {

  const initialValues = {
    username: "",
    email: "",
    companyName: "",  
    city: "",
    address: "",
    phoneNumber: "", 
    };

   const validationSchema = Yup.object().shape({
    username: Yup.string().min(3 , "It's too short").required("Required"),
    email: Yup.string().email("Enter Valid Email").required("Requird"),
    companyName: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Requird"),

  });

  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };
  
   return ( 
    <Grid align='center'>   
     <Paper elevation={0} style={poperStyle}> 
     <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
       validationSchema={validationSchema}
     >
          <Form>
            <Field as={TextField} 
            id="filled-basic"
            variant="filled"
             name="username"
              label="UserName"
               placeholder="UserName"
               helperText={<ErrorMessage name="username" style={requiredStyle} />}
                fullWidth required 
                className="inputField"
                /> 
            <Field as={TextField}
             id="filled-basic"
             variant="filled"
               name="companyName"
                label="Company Name"
                 placeholder="Company Name"
                  helperText={<ErrorMessage name="companyName"/>}
                  fullWidth required
                  className="inputField"

                  />  
              <Field as={TextField}
              id="filled-basic"
              variant="filled"
                  name="email"
                  label="Email"
                  placeholder="Email"
                    helperText={<ErrorMessage name="email"/>}
                  fullWidth required
                   className="inputField"
                  />  
                     <Field as={TextField}
                      id="standard-basic"
                      variant="filled"
                        name="city"
                          label="City"
                    placeholder="City" 
                     helperText={<ErrorMessage name="city"/>}
                    fullWidth required
                   className="inputField"
                  />  
                    <Field as={TextField}
                  id="standard-basic"
                  variant="filled"
                    name="address"
                      label="Address"
                    placeholder="Address" 
                    fullWidth required
                    helperText={<ErrorMessage name="address"/>}
                   className="inputField"
                  />  
                 <Field as={TextField}
                  id="standard-basic"
                  variant="filled"
                    name="phoneNumber"
                     type="number"
                      label="PhoneNumber"
                    placeholder="PhoneNumber"
                     helperText={<ErrorMessage name="phoneNumber"/>} 
                     fullWidth required
                   className="inputField"
                  />   
         </Form>
       </Formik> 
    </Paper>
    </Grid> 

  ); 
}

export default StepOne;
