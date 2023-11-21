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

function Page() {
  function handleAddHotel() {
    append({
      name: "",
      address: "",
      checkin: "",
      checkout: "",
      purchasePrice: 0,
      sellPrice: 0,
    });
  }
  function handleAddTransport() {}
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
    { icon: <AirportShuttleIcon />, name: "Add Transport" },
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
            {fields.map((group, groupIndex) => (
              <Box
                key={group.id}
                style={{ height: "100%" }}
                display={"flex"}
                flexDirection={"column"}
                marginBottom={5}
              >
                <Paper>
                  <Box
                    bgcolor={"#e8eef1"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    padding={1}
                  >
                    <Typography>Hotel</Typography>
                    <Button
                      color="error"
                      data-id={groupIndex}
                      onClick={handleRemove}
                    >
                      Remove
                    </Button>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignContent={"center"}
                    rowGap={2}
                    padding={4}
                  >
                    <TextField
                      label="Hotel Name"
                      {...register(`groups[${groupIndex}].name`)}
                      defaultValue={group.firstName}
                      placeholder="Hotel Name"
                      size="small"
                    />
                    <TextField
                      {...register(`groups[${groupIndex}].address`)}
                      defaultValue={group.address}
                      placeholder="Hotel Address"
                      size="small"
                    />
                    <TextField
                      {...register(`groups[${groupIndex}].checkin`)}
                      defaultValue={group.checkin}
                      placeholder="Checkin Date"
                      size="small"
                    />
                    <TextField
                      {...register(`groups[${groupIndex}].checkout`)}
                      defaultValue={group.checkin}
                      placeholder="Checkout Date"
                      size="small"
                    />
                    <TextField
                      {...register(`groups[${groupIndex}].sellPrice`)}
                      defaultValue={group.checkin}
                      placeholder="Sell Price"
                      size="small"
                    />
                    <TextField
                      {...register(`groups[${groupIndex}].purchasePrice`)}
                      defaultValue={group.checkin}
                      placeholder="Purchase Price"
                      size="small"
                    />
                    <Button size="small" variant="contained" type="button">
                      Save
                    </Button>
                  </Box>
                </Paper>
              </Box>
            ))}
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
