import React from "react";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { Paper, TextField, Typography, Box } from "@mui/material";
import { Button } from "@mui/material";

function Page() {
  return (
    <Container
      maxWidth="100vw"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",

        bgcolor: "#eeeeee",
      }}
    >
      <Paper>
        <Box
          sx={{
            height: 400,
            width: 800,
            padding: 10,
          }}
        >
          <Stack spacing={4}>
            <Typography variant="h4">Login</Typography>
            <TextField
              id="outlined-basic"
              label="User Id"
              variant="outlined"
            ></TextField>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            ></TextField>
            <a href="/packages">
              <Button variant="outlined" size="large">
                Login
              </Button>
            </a>
          </Stack>
        </Box>
      </Paper>
    </Container>
  );
}

export default Page;
