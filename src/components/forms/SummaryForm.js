import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Box, Typography, Stack } from "@mui/material";
import { setSummary } from "../../redux/actions/formActions";

const predefinedSummaries = [
  "Adaptable Software Engineer ready to support operations from conception through post-release support. Skilled creator of efficient code and exciting user experiences.",
  "Talented Software Developer equipped with great coding, debugging and project management abilities. Works great with team members under Agile and Scrum frameworks.",
  "Strategic Software Engineer skilled in application development, testing and optimization. Excels at ground-up planning, programming, and implementation.",
  "Creative Front-End Developer with a passion for crafting responsive and visually engaging web interfaces using modern JavaScript frameworks.",
  "Results-driven Back-End Developer experienced in building scalable APIs, managing databases, and integrating third-party services.",
  "Full-Stack Developer proficient in both front-end and back-end technologies, delivering robust, high-performing applications.",
  "Passionate Mobile App Developer focused on building high-performance Android and iOS apps using Flutter and React Native.",
  "Detail-oriented QA Engineer with a strong grasp of automated and manual testing, ensuring product quality across releases.",
  "DevOps Engineer experienced in CI/CD, infrastructure as code, and cloud deployments to streamline software delivery.",
  "Security-focused Software Engineer with experience in secure coding practices, threat modeling, and vulnerability analysis.",
  "Dedicated Software Engineer with experience in cross-functional team collaboration and Agile methodology.",
  "Problem-solving Python Developer specializing in automation, scripting, and data analysis tools.",
  "Cloud-Native Developer skilled in designing microservices and containerized applications using Docker and Kubernetes.",
  "Innovative Game Developer with a focus on Unity and Unreal Engine, bringing immersive gaming experiences to life.",
  "AI/ML Engineer experienced in building models, training datasets, and deploying intelligent systems in production."
];

const SummaryForm = () => {
  const summary = useSelector((state) => state.form.summary);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSummary(e.target.value));
  };

  const handlePresetClick = (preset) => {
    dispatch(setSummary(preset));
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Select a Summary or Write Your Own
      </Typography>

      <Stack spacing={1} mb={2} sx={{ maxHeight: 300, overflowY: 'auto' }}>
        {predefinedSummaries.map((text, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ccc",
              borderRadius: 1,
              p: 1,
              backgroundColor: "#f9f9f9",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#e0f7fa"
              }
            }}
            onClick={() => handlePresetClick(text)}
          >
            <Typography variant="body2">{text}</Typography>
          </Box>
        ))}
      </Stack>

      <TextField
        fullWidth
        multiline
        rows={4}
        label="Professional Summary"
        value={summary}
        onChange={handleChange}
      />
    </Box>
  );
};

export default SummaryForm;
