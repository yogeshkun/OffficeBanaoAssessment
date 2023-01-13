import React, { useState } from "react";

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

export default function DrawerContent() {
  const [Clientname, setClientName] = useState();
  const [DOCommence, setDOCommence] = useState(null);
  const [DoCompletion, setDoCompletion] = useState(null);
  const [RFQCode, setRFQCode] = useState();

  function SubmitData() {
    console.log(
      "Clientname-",
      Clientname,
      ", Date of Commencement-",
      DOCommence.$d,
      ", Date of Completion-",
      DoCompletion.$d,
      ", RFQ code-",
      RFQCode
    );
  }

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
              value={Clientname}
              onChange={(newValue) => {
                setClientName(newValue.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              size="small"
              placeholder="Client Name"
            >
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
            </Select>

            <Typography fontSize={16} mt={2}>
              <strong>Date of Commencement</strong>
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={DOCommence}
                onChange={(newValue) => {
                  setDOCommence(newValue);
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
                minDate={DOCommence}
                value={DoCompletion}
                onChange={(newValue) => {
                  setDoCompletion(newValue);
                }}
                disabled={DOCommence == null ? true : false}
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
              onChange={(newValue) => {
                setRFQCode(newValue.target.value);
              }}
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
          onClick={() => SubmitData()}
          sx={{
            width: 170,
            bgcolor: "#64d4d4",
            // display: "flex",
            // flexDirection: 'row-reverse',
            // justifyContent: 'flex-end',
            color: "white",
            fontSize: 14,
            fontWeight: "bold",
            ":hover": {
              bgcolor: "#8edce1",
              color: "white",
            },
          }}
        >
          Done
        </Button>
      </Box>
    </Container>
  );
}
