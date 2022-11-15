import React, { useCallback, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );
  console.log("value", { value });
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-exprience-group-label">Years of Exprience</FormLabel>
        <RadioGroup
          name="job-exprience-group"
          aria-aria-labelledby="job-exprience-group-label"
          onChange={handleChange}
          value={value}
        >
          <FormControlLabel
            control={<Radio size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio size="medium" />}
            label="0-3"
            value="0-3"
          />
          <FormControlLabel control={<Radio />} label="0-4" value="0-4" />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuiRadioButton;
