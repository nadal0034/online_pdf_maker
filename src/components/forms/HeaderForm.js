import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, TextField } from "@mui/material";
import { setHeader } from "../../redux/actions/formActions";

const HeaderForm = () => {
  const header = useSelector((state) => state.form.header);
  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    dispatch(setHeader({ ...header, [field]: value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <TextField
          label="Full Name"
          fullWidth
          value={header.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Email"
          fullWidth
          value={header.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <TextField
          label="Phone"
          fullWidth
          value={header.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default HeaderForm;