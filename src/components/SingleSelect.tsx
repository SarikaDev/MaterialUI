import React, { useCallback, useState } from "react";
import { Box, TextField, MenuItem, Select } from "@mui/material";

const MuiSelect = () => {
  const [country, setCountry] = useState<string>("");
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCountry(event.target.value as string);
    },
    [],
  );

  console.log("country", country);
  return (
    <Box width="250px">
      <TextField
        select
        label="Select Country"
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
        <MenuItem value="US">America</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
