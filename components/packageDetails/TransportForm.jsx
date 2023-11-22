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
  Autocomplete,
} from "@mui/material";
export default function TransportForm({
  register,
  fields,
  handleRemove,
  id,
  group,
  groupIndex,
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
  const seater = [
    {
      label: "12",
      value: 12,
    },
    {
      label: "14",
      value: 12,
    },
    {
      label: "16",
      value: 12,
    },
  ];
  return (
    <>
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
            <Typography>Transport</Typography>
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
            <Autocomplete
              disablePortal
              id=""
              options={top100Films}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Transport Details"
                  placeholder="Transport Details"
                  {...register(`group[${groupIndex}].transportDetails`)}
                />
              )}
            />
            <Autocomplete
              disablePortal
              id=""
              options={seater}
              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  label="Seater"
                  placeholder="Seater"
                  {...register(`group[${groupIndex}].seater`)}
                />
              )}
            />
            <TextField
              size="small"
              label="No. of Cars"
              placeholder="No. of Cars"
              {...register(`group[${groupIndex}].numberOfCard`)}
            />
            <TextField
              size="small"
              label="Sell Price"
              placeholder="Sell Price"
              {...register(`group[${groupIndex}].sellPrice`)}
            />
            <TextField
              size="small"
              label="Purchase Price"
              placeholder="Purchase Price"
              {...register(`group[${groupIndex}].purchasePrice`)}
            />
            <Button size="small" variant="contained" type="button">
              Save
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
