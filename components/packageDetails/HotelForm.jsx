import React from "react";
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
export default function HotelForm({
  register,
  groupIndex,
  handleRemove,
  id,
  group,
}) {
  return (
    <Box
      key={id}
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
          <Button color="error" data-id={groupIndex} onClick={handleRemove}>
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
            label="group Name"
            {...register(`groups[${groupIndex}].name`)}
            defaultValue={group.firstName}
            placeholder="Hotel Name"
            size="small"
          />
          <TextField
            label="group Address"
            {...register(`groups[${groupIndex}].address`)}
            defaultValue={group.address}
            placeholder="Hotel Address"
            size="small"
          />
          <TextField
            label="Check in Date"
            {...register(`groups[${groupIndex}].checkin`)}
            defaultValue={group.checkin}
            placeholder="Checkin Date"
            size="small"
          />
          <TextField
            label="Check out Date"
            {...register(`groups[${groupIndex}].checkout`)}
            defaultValue={group.checkin}
            placeholder="Checkout Date"
            size="small"
          />
          <TextField
            label="Sell Price"
            {...register(`groups[${groupIndex}].sellPrice`)}
            defaultValue={group.checkin}
            placeholder="Sell Price"
            size="small"
          />
          <TextField
            label="Purchase Price"
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
  );
}
