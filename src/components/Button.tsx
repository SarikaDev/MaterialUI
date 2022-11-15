import React, { useState, useCallback } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import {
  Send,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

const MuiButton = () => {
  const [formatsM, setFormatsM] = useState<string[]>([]);
  const [formatsS, setFormatsS] = useState<string | null>(null);
  const formatChangeM = useCallback(
    (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
      setFormatsM(updatedFormats);
    },
    [],
  );
  const formatChangeS = useCallback(
    (_event: React.MouseEvent<HTMLElement>, updatedFormat: string | null) => {
      setFormatsS(updatedFormat);
    },
    [],
  );

  console.log(formatsM);
  console.log(formatsS);
  return (
    <React.Fragment>
      //! Phase-01
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://google.com">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Stack spacing={4} marginTop={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack display="block" marginTop={2} spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} marginTop={2}>
        <Button variant="contained" startIcon={<Send />}>
          Send
        </Button>
        <Button
          variant="contained"
          endIcon={<Send />}
          disableElevation
          disableRipple
          onClick={() => {
            alert("ALert");
          }}
        >
          Send
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <Send />
        </IconButton>
      </Stack>
      //! Phase-02
      <Stack direction="row" spacing={4} marginTop={2}>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button
            color="primary"
            aria-label="alignment button group"
            onClick={() => {
              alert("left Clicked");
            }}
          >
            left
          </Button>
          <Button color="primary">right</Button>
          <Button color="primary">center</Button>
        </ButtonGroup>
      </Stack>
      {/* //! Phase-03 TO Toggle Multiple Options  */}
      <Stack direction="row" spacing={4} marginTop={2}>
        <Typography variant="h6"> Multiple Options Toggle Selection</Typography>

        <ToggleButtonGroup
          aria-label="text formatting"
          value={formatsM}
          color="success"
          orientation="vertical"
          onChange={formatChangeM}
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* //! Phase-04 TO Toggle Single Options  */}
      <Stack direction="row" spacing={4} marginTop={2}>
        <Typography variant="h6"> Single Options Toggle Selection</Typography>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formatsS}
          color="secondary"
          orientation="horizontal"
          onChange={formatChangeS}
          exclusive
        >
          <ToggleButton
            value="bold"
            aria-label="bold"
            sx={formatsS === "bold" ? { borderLeft: "3px solid blue" } : null}
          >
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </React.Fragment>
  );
};

export default MuiButton;
