import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import DrawerCss from "./Drawer.css";

export default function DrawerContent( ) {
    
  const [Client, setClient] = React.useState("");
  const handleChange = (event) => {
    setClient(event.target.value);

  };

  const [Date1, setDate1] = React.useState(null);
  const [Date2, setDate2] = React.useState(null);

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 5, mx: 2 }}>
        <Typography fontSize={25}>
          <strong>Workorder</strong>
        </Typography>
        <Box>
          <FormControl sx={{ minWidth: "100%" }}>
            <Typography fontSize={16} mt={2}>
              <strong>Client</strong>
            </Typography>
            <Select
              value={Client}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              placeholder="Client Name"
            >
              
              <MenuItem value={10}>A</MenuItem>
              <MenuItem value={20}>B</MenuItem>
              <MenuItem value={30}>C</MenuItem>
            </Select>

            <Typography fontSize={16} mt={2}>
              <strong>Date of Commencement</strong>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={Date1}
                onChange={(newValue) => {
                  setDate1(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            {/* If Date of Commencement is select then only you can select completion date and and only the previos dates */}
            <Typography fontSize={16} mt={2}>
              <strong>Date of Completion</strong>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                size="small"
                minDate={Date1}
                value={Date2}
                onChange={(newValue) => {
                  setDate2(newValue);
                }}
                disabled={Date1 == null ? true : false}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>

            <Typography fontSize={16} mt={2}>
              <strong>RFQ code</strong>
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="RFQ code"
              variant="outlined"
              size="small"
            />
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          mt: "70%",
        }}
      >
        <Button
          variant="contained"
          sx={{ width: "200px" }}
        >
          Done
        </Button>
      </Box>
    </Container>
  );
}
