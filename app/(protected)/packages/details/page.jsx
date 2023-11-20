"use client";

import { Container, Toolbar } from "@mui/material";
import React from "react";
import { Paper, TextField, Typography, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";

import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

function Page() {
  const actions = [
    {
      icon: <SaveIcon />,
      name: "Add Hotel",
    },
    { icon: <PrintIcon />, name: "Add Transport" },
    { icon: <ShareIcon />, name: "Add Attraction" },
  ];
  return (
    <>
      <Typography>Hello </Typography>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default Page;
