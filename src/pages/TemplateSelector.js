import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { setSelectedTemplate } from "../redux/actions/formActions";

const TemplateSelector = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");

  const handleContinue = () => {
    if (selected) {
      dispatch(setSelectedTemplate(selected));
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Select a Resume Template
      </Typography>

      <RadioGroup
        row
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        <Grid container spacing={4}>
          {/* Template 1 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="img"
                src="/assets/template1.png"
                alt="Template 1"
                sx={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              <FormControlLabel
                value="template1"
                control={<Radio />}
                label="Template 1"
                sx={{ justifyContent: "center" }}
              />
            </Paper>
          </Grid>

          {/* Template 2 */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                component="img"
                src="/assets/template2.png"
                alt="Template 2"
                sx={{
                  width: "100%",
                  height: "180px",
                  objectFit: "contain",
                }}
              />
              <FormControlLabel
                value="template2"
                control={<Radio />}
                label="Template 2"
                sx={{ justifyContent: "center" }}
              />
            </Paper>
          </Grid>
        </Grid>
      </RadioGroup>

      <Button
        variant="contained"
        onClick={handleContinue}
        disabled={!selected}
        sx={{ mt: 4 }}
      >
        Continue
      </Button>

      {selected && (
        <Typography sx={{ mt: 2 }} color="green">
          You selected: {selected}
        </Typography>
      )}
    </Box>
  );
};

export default TemplateSelector;
