"use client";

import React from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import {
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function Page() {
  return (
    <Box sx={{ padding: 4 }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ padding: 2 }}
      >
        <Typography variant="h6">My Packages</Typography>
        <TextField
          size="small"
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
      </Box>
      <Paper sx={{ padding: 4, minHeight: "100%" }}>
        <Box>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/card_img_demo.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Singapore
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  Buyer: Discovery
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Add Details
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Paper>
      <Fab
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default Page;
