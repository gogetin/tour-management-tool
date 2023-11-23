import React from "react";
import { Box, Grid, Button, Paper } from "@mui/material";
import { usePDF } from "react-to-pdf";

export default function CostSheet({ onClose }) {
  function handleClose() {
    onClose();
  }
  function converToPdf() {
    toPDF();
  }
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <Box padding={5}>
      <Box>
        <Button
          sx={{ margin: 2 }}
          variant="contained"
          onClick={handleClose}
          color={"error"}
        >
          Close
        </Button>
        <Button sx={{ margin: 2 }} variant="contained" onClick={converToPdf}>
          Download Pdf
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <table
          style={{
            boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid black",
            padding: "50px",
          }}
          ref={targetRef}
          width={"800px"}
        >
          <tr>
            <td width={"300px"}>Logo</td>
            <td align={"right"} colspan={2} width={"300px"}>
              <h2>Legend Holidays</h2>
              <p>9B, Marquis Street, Kolkata 700016</p>
              <p>legendholidays.kol@gmail.com</p>
            </td>
          </tr>

          {/* Hotel Heading start*/}
          <tr>
            <td align={"center"} colspan={3}>
              <h3>Hotel Cost</h3>
            </td>
          </tr>
          {/* Hotel Heading ends*/}
          {/* Hotels start*/}
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px">
              <hr />
            </td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          {/* Hotels end*/}
          {/* Transport Heading start*/}
          <tr>
            <td align={"center"} colspan={3}>
              <h3>Transport Cost</h3>
            </td>
          </tr>
          {/*  Transport Heading ends*/}
          {/*  Transport start*/}
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          <tr>
            <td width="200px">
              <h4>Holiday in Express</h4>
            </td>
            <td width="200px"></td>
            <td align="right" width="200px">
              500 SGD
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "13px" }}>
              <p>Check in: 28/02/2024</p>
              <p>Check out: 28/02/2024</p>
              <p>Rooms: 2</p>
              <p>Night: 3</p>
              <p>PAX:4</p>
            </td>
          </tr>
          {/*  Transport end*/}
        </table>
      </Box>
    </Box>
  );
}
