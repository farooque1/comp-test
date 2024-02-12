import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import { MdDescription } from "react-icons/md";
import { Button } from "reactstrap";

const Sample = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}
      connectorStyleConfig={{
          size: 4,
        }}
      styleConfig={{
        activeBgColor: '#4A4FC4',
        activeTextColor: '#fff',
        inactiveTextColor: '#2b7cff',
        completedBgColor: '#4A4FC4',
        completedTextColor: '#fff',
        size: '3em',	
      }}
      
      >
        <Step label="Step 1"  />
        <Step label="Personal Detail" />
        <Step label="Confirmation" />
        <Step label="Personal Detail" />
        <Step label="Confirmation" />
      </Stepper>

      <div style={{ marginTop: '20px' }}>
        <button color="primary" onClick={handlePrev} disabled={activeStep === 0}>Previous</button>{' '}
        <button color="primary" onClick={handleNext} disabled={activeStep === 4}>Next</button>
      </div>
    </div>
  );
};

export default Sample;
