import { Box } from "@mui/system";
import { Masonry } from "@mui/lab";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const heights = [
  150, 30, 40, 80, 90, 55, 66, 70, 33, 120, 180, 160, 60, 90, 40, 30, 20,
];
const MuiMasonry = () => {
  return (
    <Box sx={{ width: 500, height: "auto", border: "2px solid blue" }}>
      <Masonry columns={4} spacing={1}>
        {heights.map((height, index) => (
          <Paper
            key={index}
            sx={{
              border: "2px solid red",
            }}
          >
            <Accordion sx={{ minHeight: height, width: "auto" }}>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography>Accordian {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Content</AccordionDetails>
            </Accordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default MuiMasonry;
