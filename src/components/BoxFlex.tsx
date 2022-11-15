import { Directions } from "@mui/icons-material";
import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiBox = () => {
  return (
    <>
      <Stack
        sx={{ border: "2px solid black" }}
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "150px",
            padding: "16px",
            width: "200px",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Sarika
        </Box>
        <Box
          component="span"
          sx={{
            backgroundColor: "blue",
            color: "black",
            height: "200px",
            padding: "16px",
            width: "200px",
            "&:hover": {
              backgroundColor: "red",
            },
          }}
        >
          Sandeep
        </Box>
      </Stack>
    </>
  );
};

export default MuiBox;
