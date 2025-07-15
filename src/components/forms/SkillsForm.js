import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Button, Chip, Stack } from "@mui/material";
import { setSkills, setSkillInput } from "../../redux/actions/formActions";

const SkillsForm = () => {
  const skills = useSelector((state) => state.form.skills);
  const skillInput = useSelector((state) => state.form.skillInput);
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    if (skillInput.trim()) {
      dispatch(setSkills([...skills, skillInput.trim()]));
      dispatch(setSkillInput(""));
    }
  };

  const handleDeleteSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    dispatch(setSkills(updated));
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Enter Skill"
          value={skillInput}
          onChange={(e) => dispatch(setSkillInput(e.target.value))}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
        />
        <Button onClick={handleAddSkill} variant="outlined">
          Add Skill
        </Button>
      </Stack>

      <Box sx={{ mt: 2 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(index)}
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsForm;
