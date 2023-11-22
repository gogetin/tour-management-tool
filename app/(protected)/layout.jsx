"use client";

import { Container, Toolbar } from "@mui/material";
import React from "react";
import { Paper, TextField, Typography, Box, IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";

function layout({ children }) {
  return (
    <Container disableGutters={true} maxWidth={"100vw"} sx={{ padding: 0 }}>
      <Box>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">Tour Manager</Typography>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </Container>
  );
}

export default layout;
