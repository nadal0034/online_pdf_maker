import React, { useState } from "react";
import {
  Container,
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import HeaderForm from "../components/forms/HeaderForm";
import ExperienceForm from "../components/forms/ExperienceForm";
import EducationForm from "../components/forms/EducationForm";
import SkillsForm from "../components/forms/SkillsForm";
import SummaryForm from "../components/forms/SummaryForm";
import FinalStep from "../components/forms/FinalStep";
import { useDispatch } from "react-redux";
import { setSelectedTemplate } from "../redux/actions/formActions";

const steps = ["Header", "Education", "Experience", "Skills", "Summary", "Finalize"];

export default function PdfMaker() {
    const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleGoBackToTemplate = () => {
    dispatch(setSelectedTemplate(""));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <HeaderForm />;
      case 1:
        return <EducationForm />;
      case 2:
        return <ExperienceForm />;
      case 3:
        return <SkillsForm />;
      case 4:
        return <SummaryForm />;
      case 5:
        return <FinalStep />;
      default:
        return "Unknown Step";
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>PDF Maker</Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === steps.length - 1}
        >
          Next
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button variant="outlined" color="secondary" onClick={handleGoBackToTemplate}>
          Back to Template Selection
        </Button>
      </Box>
    </Container>
  );
}
