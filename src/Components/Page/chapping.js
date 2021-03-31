import React,{Fragment, useState} from 'react'
import PageHero from '../PageHero'
import {makeStyles} from '@material-ui/core/styles'
import {Stepper, Step , StepLabel, Typography, Button} from '@material-ui/core';
import StepOne from './StepsChapping.js/StepOne';
 import StepTwo from './StepsChapping.js/StepTwo';
  import StepThree from './StepsChapping.js/StepThree';


  const useStyles = makeStyles((theme) => ({
    root: {
       width: '50%',
      margin: "6rem auto",
      border: "1px solid #999"
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Sender information', 'Recipient information', 'Create an ad'];
  }
  
  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StepOne /> ;
      case 1:
        return <StepTwo /> ;
      case 2:
        return <StepThree />;
      default:
        return 'Unknown stepIndex';
    }
  }
  

function Chapping() {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
  
    return (
        <Fragment>
       <PageHero title="chapping" />
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div style={{"text-align": "initial", "padding": "20px"}}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
        </Fragment>
    )
}

export default Chapping
