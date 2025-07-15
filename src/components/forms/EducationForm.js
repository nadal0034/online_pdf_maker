import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, IconButton, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setEducation } from "../../redux/actions/formActions";

const EducationForm = () => {
  const education = useSelector((state) => state.form.education);
  const dispatch = useDispatch();

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    dispatch(setEducation(updated));
  };

  const handleAdd = () => {
    dispatch(setEducation([...education, { school: "", degree: "", year: "" }]));
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
              label="School"
              fullWidth
              value={edu.school}
              onChange={(e) => handleChange(index, "school", e.target.value)}
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
          <Grid item xs={12} md={3}>
            <TextField
              label="Year"
              fullWidth
              value={edu.year}
              onChange={(e) => handleChange(index, "year", e.target.value)}
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