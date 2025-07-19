import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, IconButton, Button, Box, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setEducation } from "../../redux/actions/formActions";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

const EducationForm = () => {
  const education = useSelector((state) => state.form.education);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    dispatch(setEducation(updated));
  };

  const handleAdd = () => {
    dispatch(setEducation([...education, { school: "", location: "", degree: "", month: "", year: "", stillEnrolled: "" }]));
  };

  const handleRemove = (index) => {
    const updated = [...education];
    updated.splice(index, 1);
    dispatch(setEducation(updated));
  };

  return (
    <Box>
      {education.map((edu, index) => (
        <Grid container spacing={2} key={index} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <TextField
              label="School Name"
              fullWidth
              value={edu.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="School Location"
              fullWidth
              value={edu.location}
              onChange={(e) => handleChange(index, "location", e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              label="Degree"
              fullWidth
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
            />
          </Grid>
         {/* Graduation Month */}
          <Grid item xs={12} md={4}>
            <TextField
              label="Month"
              select
              fullWidth
              value={edu.month}
              onChange={(e) => handleChange(index, "month", e.target.value)}
            >
              {months.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Graduation Year */}
          <Grid item xs={12} md={4}>
            <TextField
              label="Year"
              select
              fullWidth
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
            >
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {/* Checkbox: I’m still enrolled */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={edu.stillEnrolled}
                  onChange={(e) =>
                    handleChange(index, "stillEnrolled", e.target.checked)
                  }
                />
              }
              label="I'm still enrolled"
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <IconButton onClick={() => handleRemove(index)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}
      <Button onClick={handleAdd} variant="outlined">
        Add Education
      </Button>
    </Box>
  );
};

export default EducationForm;