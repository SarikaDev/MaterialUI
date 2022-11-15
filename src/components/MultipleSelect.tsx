import React, { useCallback, useState } from "react";
import { Box, TextField, MenuItem, Select } from "@mui/material";

const MuiMultipleSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setCountries(typeof value === "string" ? value.split(",") : value);
    },
    [],
  );

  console.log("country", countries);
  return (
    <Box width="250px">
      <TextField
        select
        label="Select Multiple  Country"
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="CA">Canada</MenuItem>
        <MenuItem value="US">America</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiMultipleSelect;
