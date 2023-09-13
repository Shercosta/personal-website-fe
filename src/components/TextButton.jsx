import React from "react";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";

const TextButton = ({ text }) => {
  return (
    <Stack spacing={2} direction={"row"}>
      <Button variant="outlined">{text}</Button>
    </Stack>
  );
};

export default TextButton;
