import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField, IconButton, Button, Box } from "@mui/material";
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
    dispatch(setExperiences([...experiences, { company: "", role: "", duration: "", desc: "" }]));
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
                label="Company"
                fullWidth
                value={exp.company}
                onChange={(e) => handleChange(index, "company", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Role"
                fullWidth
                value={exp.role}
                onChange={(e) => handleChange(index, "role", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Duration"
                fullWidth
                value={exp.duration}
                onChange={(e) => handleChange(index, "duration", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <IconButton onClick={() => handleRemove(index)}>
                <DeleteIcon />
              </IconButton>
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
