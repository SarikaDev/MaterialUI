import React, { useCallback, useState } from "react";
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";

//! Error
import MailRounded from "@mui/icons-material/MailRounded";
const MuiCheckBox = () => {
  const [value, setValue] = useState<boolean>(false);
  const [book, setBook] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  const handleClick = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.checked);
    },
    [],
  );

  const handleClick2 = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setBook(event.target.checked);
    },
    [],
  );

  const handleSkills = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const index = skills.indexOf(event.target.value);
      if (index === -1) {
        setSkills(prev => [...prev, event.target.value]);
      } else {
        setSkills(() => skills.filter(skill => skill !== event.target.value));
      }
    },
    [],
  );
  console.log(skills);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox color="success" checked={value} onChange={handleClick} />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<MailRounded />}
          checkedIcon={<MailRounded />}
          checked={book}
          color="warning"
          onChange={handleClick2}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              label="HTML"
              value="html"
              control={
                <Checkbox
                  color="success"
                  checked={skills.includes("html")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              value="css"
              control={
                <Checkbox
                  color="success"
                  checked={skills.includes("css")}
                  onChange={handleSkills}
                />
              }
            />
            <FormControlLabel
              label="React"
              value="react"
              control={
                <Checkbox
                  color="success"
                  checked={skills.includes("react")}
                  onChange={handleSkills}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;
