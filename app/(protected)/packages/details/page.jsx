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
} from "@mui/material";
import { useForm, useFieldArray } from "react-hook-form";
import HotelForm from "@/components/packageDetails/HotelForm";
import TransportForm from "@/components/packageDetails/TransportForm";

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
    });
  }
  function handleRemove(e) {
    let id = parseInt(e.target.dataset.id);
    console.log(id);
    remove(id);
  }
  const actions = [
    {
      icon: <HotelIcon onClick={handleAddHotel} />,
      name: "Add Hotel",
    },
    {
      icon: <AirportShuttleIcon onClick={handleAddTransport} />,
      name: "Add Transport",
    },
    { icon: <AttractionsIcon />, name: "Add Attraction" },
  ];
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
  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Paper sx={{ width: "100%" }}>
          <Box
            width={"80%"}
            display={"flex"}
            justifyContent={"end"}
            padding={2}
            maxWidth={"1200px"}
          >
            <Button variant="contained">Get Quatation</Button>
          </Box>
        </Paper>
        <Box
          padding={4}
          sx={{
            position: "fixed",
            overflowY: "scroll",
            width: "80%",
            height: "60vh",
            marginTop: 14,
            maxWidth: "1200px",
          }}
          bgcolor={"#eff5ff"}
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
                ))
            )}
          </form>
        </Box>
      </Box>

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
