import React, { useCallback, useState } from "react";
import { Autocomplete, Stack, TextField } from "@mui/material";
// ! Fail Refer MUI.COM

interface Skill {
  id: number;
  label: string;
}

const skills = ["Html", "Css", "React"];
const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  const skillOptions = skills.map((skill, index) => ({
    id: index + 1,
    label: skill,
  }));
  console.log("SkillsOptions", { skill });
  // const handleChange = useCallback(
  //   (event: React.ChangeEvent<HTMLInputElement>,newValue:string | null) => {
  //     setValue(newValue)
  //   },
  //   [],
  // );
  console.log("value", { value });
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={params => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillOptions}
        getOptionLabel={option => option.label}
        renderInput={params => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
