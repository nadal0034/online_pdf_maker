import React from "react";
import { Button, Typography } from "@mui/material";

const FinalStep = () => {
  const handleGeneratePDF = () => {
    // Placeholder action
    alert("PDF generation logic goes here");
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Review your details and click below to generate your PDF.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGeneratePDF}>
        Generate PDF
      </Button>
    </>
  );
};

export default FinalStep;