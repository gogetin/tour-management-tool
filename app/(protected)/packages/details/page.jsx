"use client";

import React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import HotelIcon from "@mui/icons-material/Hotel";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import AttractionsIcon from "@mui/icons-material/Attractions";
import {
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
  Button,
  Stack,
  Badge,
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import HotelForm from "@/components/packageDetails/HotelForm";
import TransportForm from "@/components/packageDetails/TransportForm";
import AttractionForm from "@/components/packageDetails/AttractionForm";
import Dialog from "@mui/material/Dialog";
import CostSheet from "@/components/CostSheet";

function Page() {
  function handleAddHotel() {
    append({
      type: "hotel",
      name: "",
      address: "",
      checkin: "",
      checkout: "",
      purchasePrice: 0,
      sellPrice: 0,
    });
  }
  function handleAddTransport() {
    append({
      type: "transport",
      transportDetails: "",
      seater: "",
      numberOfcars: "",
      purchasePrice: "",
      sellPrice: "",
    });
  }
  function handleAddAttraction() {
    append({
      type: "attraction",
      attractionDetails: "",
      adults: "",
      children: "",
      purchasePrice: "",
      sellPrice: "",
    });
  }
  function handleRemove(e) {
    let id = parseInt(e.target.dataset.id);
    console.log(id);
    remove(id);
  }

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      groups: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "groups",
  });
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <CostSheet onClose={handleClose} />
      </Dialog>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        bgcolor="#f0f0f0"
        minHeight={"100vh"}
      >
        <Box
          width={"95%"}
          display={"flex"}
          justifyContent={"end"}
          position={"sticky"}
          padding={0}
          top={64}
          left={0}
          bgcolor={"#fff"}
          zIndex={10}
        >
          <Paper sx={{ display: "flex", width: "100%" }}>
            <Box margin={2}>
              <Badge badgeContent={0} color={"error"}>
                <Button
                  onClick={handleAddHotel}
                  size="small"
                  variant="contained"
                >
                  <HotelIcon sx={{ margin: 1 }} />
                  Add Hotel
                </Button>
              </Badge>
            </Box>
            <Box sx={{ margin: 2 }}>
              <Badge badgeContent={0} color={"error"}>
                <Button
                  onClick={handleAddTransport}
                  size="small"
                  variant="contained"
                >
                  <AirportShuttleIcon sx={{ margin: 1 }} />
                  Add Transport
                </Button>
              </Badge>
            </Box>
            <Box sx={{ margin: 2 }}>
              <Badge color={"error"} badgeContent={0}>
                <Button
                  onClick={handleAddAttraction}
                  size="small"
                  variant="contained"
                >
                  <AttractionsIcon sx={{ margin: 1 }} />
                  Add Attraction
                </Button>
              </Badge>
            </Box>
            <Button
              sx={{ margin: 2, padding: 2 }}
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleClickOpen}
            >
              Get Price Sheet
            </Button>
          </Paper>
        </Box>
        <Box
          marginTop={8}
          maxWidth={"1200px"}
          width={"75%"}
          padding={4}
          display={"flex"}
          flexDirection={"column"}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(
              (group, groupIndex) =>
                (group.type === "hotel" && (
                  <HotelForm
                    register={register}
                    groupIndex={groupIndex}
                    handleRemove={handleRemove}
                    group={group}
                  />
                )) ||
                (group.type === "transport" && (
                  <TransportForm
                    register={register}
                    groupIndex={groupIndex}
                    handleRemove={handleRemove}
                    group={group}
                  />
                )) ||
                (group.type === "attraction" && (
                  <AttractionForm
                    register={register}
                    groupIndex={groupIndex}
                    handleRemove={handleRemove}
                    group={group}
                  />
                ))
            )}
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Page;
