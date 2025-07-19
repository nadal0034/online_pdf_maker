import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, TextField, Button, Chip, Stack, Typography } from "@mui/material";
import { setSkills, setSkillInput } from "../../redux/actions/formActions";

// Suggested skill list
const suggestedSkills = [
  "Software development",
  "Database management",
  "Version control",
  "Cloud computing",
  "API integration",
  "Data analysis",
  "Agile methodologies",
  "Project coordination",
  "Technical documentation",
  "Team collaboration",
  "Effective communication",
  "Problem solving",
  "Attention to detail",
  "Time management",
  "Critical thinking",
  "Superior time management",
];

const SkillsForm = () => {
  const skills = useSelector((state) => state.form.skills);
  const skillInput = useSelector((state) => state.form.skillInput);
  const dispatch = useDispatch();

  const handleAddSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed && !skills.includes(trimmed)) {
      dispatch(setSkills([...skills, trimmed]));
      dispatch(setSkillInput(""));
    }
  };

  const handleDeleteSkill = (index) => {
    const updated = skills.filter((_, i) => i !== index);
    dispatch(setSkills(updated));
  };

  const handleSuggestedClick = (skill) => {
    if (!skills.includes(skill)) {
      dispatch(setSkills([...skills, skill]));
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Add your skills
      </Typography>

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

      {/* Selected skills */}
      <Box sx={{ mt: 2 }}>
        <Typography variant="subtitle1">Your Skills</Typography>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => handleDeleteSkill(index)}
            color="primary"
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
      </Box>

      {/* Suggested skills */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1">Suggested Skills</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {suggestedSkills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              variant="outlined"
              color="secondary"
              onClick={() => handleSuggestedClick(skill)}
              disabled={skills.includes(skill)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsForm;
