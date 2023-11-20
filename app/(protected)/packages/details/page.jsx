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
  const actions = [
    {
      icon: <HotelIcon />,
      name: "Add Hotel",
    },
    { icon: <AirportShuttleIcon />, name: "Add Transport" },
    { icon: <AttractionsIcon />, name: "Add Attraction" },
  ];
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      // Set your initial form values here
      hotels: [
        {
          name: "",
          Address: "",
          checkin: "",
          checkout: "",
          purchasePrice: 0,
          sellPrice: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hotels",
  });
  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };
  return (
    <>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((group, groupIndex) => (
            <div key={group.id}>
              <input
                {...register(`groups[${groupIndex}].name`)}
                defaultValue={group.firstName} // use defaultValue for default values
                placeholder="First Name"
              />
              <input
                {...register(`groups[${groupIndex}].lastName`)}
                defaultValue={group.lastName} // use defaultValue for default values
                placeholder="Last Name"
              />
              <button type="button" onClick={() => remove(groupIndex)}>
                Remove Group
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ firstName: "", lastName: "" })}
          >
            Add Group
          </button>

          <button type="submit">Submit</button>
        </form>
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
