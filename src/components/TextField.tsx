import React, { useState } from "react";
import { TextField, Stack, InputAdornment } from "@mui/material";
const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="User" variant="filled" />
        <TextField label="Admin" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label=" Input" color="warning" required />
        <TextField
          label=" Input"
          color="secondary"
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
          error={!value}
          helperText={!value ? "Required" : "Dont share data with any one"}
        />
        <TextField
          label="password"
          type="password"
          disabled
          helperText="Dont share password with any one"
        />
        <TextField
          label="password"
          type="password"
          helperText="Dont share password with any one"
        />
        <TextField label="read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG's</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextField;
