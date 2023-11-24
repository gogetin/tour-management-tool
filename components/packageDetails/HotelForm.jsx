import React, { useState } from "react";
import {
  Paper,
  TextField,
  Typography,
  Box,
  IconButton,
  CardActionArea,
  CardActions,
  Button,
  Autocomplete,
  Grid,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function HotelForm({
  register,
  groupIndex,
  handleRemove,
  id,
  group,
}) {
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
  ];
  const [value, setValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
          <Grid container spacing={2} padding={2}>
            <Grid item xs={12}>
              <Autocomplete
                disablePortal
                id=""
                options={top100Films}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    label="Hotel Name"
                    placeholder="Hotel Name"
                    {...register(`groups[${groupIndex}].name`)}
                  />
                )}
              />
            </Grid>
            <Grid item md={6} sm={12}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Check in"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </Grid>
            <Grid item md={6} sm={12}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  sx={{ width: "100%" }}
                  label="Check out"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoContainer>
            </Grid>
            <Grid item lg={2} md={6} sm={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Total Rooms"
                {...register(`groups[${groupIndex}].rooms`)}
                defaultValue={group.purchasePrice}
                placeholder="Total Rooms"
                size="small"
              />
            </Grid>
            <Grid item lg={2} md={6} sm={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Total Pax"
                {...register(`groups[${groupIndex}].pax`)}
                defaultValue={group.purchasePrice}
                placeholder="PAX"
                size="small"
              />
            </Grid>
            <Grid item lg={8} md={12} sm={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Lead Pax Name"
                {...register(`groups[${groupIndex}].paxName`)}
                defaultValue={group.purchasePrice}
                placeholder="Lead Pax Name"
                size="small"
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Sell Price"
                {...register(`groups[${groupIndex}].sellPrice`)}
                defaultValue={group.sellPrice}
                placeholder="Sell Price"
                size="small"
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <TextField
                sx={{ width: "100%" }}
                label="Purchase Price"
                {...register(`groups[${groupIndex}].purchasePrice`)}
                defaultValue={group.purchasePrice}
                placeholder="Purchase Price"
                size="small"
              />
            </Grid>
            <Grid item lg={4} md={6} sm={12}>
              <TextField
                disabled
                sx={{ width: "100%" }}
                label="Profit"
                {...register(`groups[${groupIndex}].profit`)}
                defaultValue={group.profit}
                placeholder="Profit"
                size="small"
              />
            </Grid>
            <Grid item>
              <Button size="medium" variant="contained" type="button">
                Save
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </LocalizationProvider>
  );
}
