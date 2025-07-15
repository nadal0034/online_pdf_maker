import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { setSummary } from "../../redux/actions/formActions";

const SummaryForm = () => {
  const summary = useSelector((state) => state.form.summary);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setSummary(e.target.value));
  };

  return (
    <TextField
      fullWidth
      multiline
      rows={4}
      label="Professional Summary"
      value={summary}
      onChange={handleChange}
    />
  );
};

export default SummaryForm;