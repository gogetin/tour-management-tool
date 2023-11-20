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
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Page() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
                <a href="packages/details">
                  <Button size="small" color="primary">
                    Add Details
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Box>
        </Paper>
        <Fab
          sx={{ position: "absolute", bottom: 16, right: 16 }}
          color="primary"
          aria-label="add"
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Box>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Enter Package Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="pgkg_name"
            label="Package Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Page;
