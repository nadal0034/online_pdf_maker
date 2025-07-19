import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, IconButton, Button, Box, FormControlLabel, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setExperiences } from "../../redux/actions/formActions";

const ExperienceForm = () => {
  const experiences = useSelector((state) => state.form.experiences);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    dispatch(setExperiences(updated));
  };

  const handleAdd = () => {
    dispatch(setExperiences([...experiences, { jobTitle: "", employer: "", city: "", country: "", startDate: "", endDate: "", current: "", description: "" }]));
  };

  const handleRemove = (index) => {
    const updated = [...experiences];
    updated.splice(index, 1);
    dispatch(setExperiences(updated));
  };

  return (
    <Box>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 2, border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                label="Job Title"
                fullWidth
                value={exp.jobTitle}
                onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Employer"
                fullWidth
                value={exp.employer}
                onChange={(e) => handleChange(index, "employer", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="City"
                fullWidth
                value={exp.city}
                onChange={(e) => handleChange(index, "city", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Country"
                fullWidth
                value={exp.country}
                onChange={(e) => handleChange(index, "country", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Start Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={exp.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="End Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={exp.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                fullWidth
                multiline
                value={exp.desc}
                onChange={(e) => handleChange(index, "desc", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={exp.current}
                    onChange={(e) => handleChange(index, "current", e.target.checked)}
                  />
                }
                label="I currently worked here"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconButton onClick={() => handleRemove(index)}>
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ))}
      <Button onClick={handleAdd} variant="outlined">
        Add Experience
      </Button>
    </Box>
  );
};

export default ExperienceForm;
