import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import Checkbox from "@mui/material/Checkbox";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
}

const rows = [
  createData("Civil 1", 567.8, "₹2,98,6792"),
  createData("Civil 2", 567.8, "₹2,98,6792"),
  createData("Civil 3", 567.8, "₹2,98,6792"),
  createData("Civil 4", 567.8, "₹2,98,6792"),
  createData("Civil 5", 567.8, "₹2,98,6792"),
];

const Activitys = [
  createData("Activity 1", 567.8, "₹2,98,6792"),
  createData("Activity 2", 567.8, "₹2,98,6792"),
  createData("Activity 3", 567.8, "₹2,98,6792"),
  createData("Activity 4", 567.8, "₹2,98,6792"),
];

function Row({ row, AllChecked }) {
  //   const { row } = props;
  const [open, setOpen] = React.useState(false);

  //CheckBox of Civil
  const [Civil, setCivil] = React.useState(false);

  const handleChange = (event) => {
    setCivil(event.target.checked);
  };

  useEffect(() => {
    if (AllChecked) {
      setCivil(true);
    } else {
      setCivil(false);
    }
  }, [AllChecked]);

  return (
    <React.Fragment>
      {/* Header */}
      <TableRow>
        <TableCell sx={open ? { borderBottom: "none" } : {}}>
          <Checkbox
            checked={Civil}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          sx={open ? { borderBottom: "none" } : {}}
        >
          <Typography fontSize={15}>
            <strong>{row.name}</strong>
          </Typography>
        </TableCell>
        <TableCell align="left" sx={open ? { borderBottom: "none" } : {}}>
          {row.calories}
        </TableCell>
        <TableCell align="left" sx={open ? { borderBottom: "none" } : {}}>
          {row.fat}
        </TableCell>

        <TableCell sx={open ? { borderBottom: "none" } : {}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      {open
        ? Activitys.map((Activitys) => (
            <ActivitysMain Activitys={Activitys} Civil={Civil} />
          ))
        : null}
    </React.Fragment>
  );
}

function ActivitysMain({ Activitys, Civil }) {
  // console.log(Activitys);
  const [open1, setOpen1] = React.useState(false);
  const WorkItem = [
    createData("Work Item 1", 567.8, "₹2,98,6792"),
    createData("Work Item 2", 567.8, "₹2,98,6792"),
    createData("Work Item 3", 567.8, "₹2,98,6792"),
  ];

  const [Activity, setActivity] = React.useState(false);

  const handleChange = (event) => {
    setActivity(event.target.checked);
  };

  useEffect(() => {
    if (Civil) {
      setActivity(true);
    } else {
      setActivity(false);
    }
  }, [Civil]);
  return (
    <React.Fragment>
      <TableRow sx={{ borderBottom: "none" }}>
        <TableCell sx={{ borderBottom: "none" }}></TableCell>
        <TableCell align="left" sx={{ borderBottom: "none" }}>
          <Checkbox
            checked={Activity}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />{" "}
          {Activitys.name}
        </TableCell>
        <TableCell align="left" sx={{ borderBottom: "none" }}>
          {Activitys.calories}
        </TableCell>
        <TableCell align="left" sx={{ borderBottom: "none" }}>
          {Activitys.fat}
        </TableCell>

        <TableCell sx={{ borderBottom: "none" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen1(!open1)}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent:'center',
              
             
            }}
          >
            {open1 ? (
              <ExpandLessRoundedIcon  />
            ) : (
              <ExpandMoreRoundedIcon
                
              />
            )}
          </IconButton>
        </TableCell>
      </TableRow>
      {open1
        ? WorkItem.map((WorkItem) => (
            <WorkItems WorkItem={WorkItem} Activity={Activity} />
          ))
        : null}

      {/* <WorkItems/> */}
    </React.Fragment>
  );
}

function WorkItems({ WorkItem, Activity }) {
  const [Work, setWork] = React.useState(false);

  const handleChange = (event) => {
    setWork(event.target.checked);
  };

  useEffect(() => {
    if (Activity) {
      setWork(true);
    } else {
      setWork(false);
    }
  }, [Activity]);

  return (
    <React.Fragment>
      <TableRow sx={{ borderBottom: "none" }}>
        <TableCell sx={{ borderBottom: "none" }}></TableCell>
        <TableCell sx={{ borderBottom: "none" }}>
          <Box sx={{ mx: 5 }}>
            <Checkbox
              checked={Work}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />

            {WorkItem.name}
          </Box>
        </TableCell>
        <TableCell sx={{ borderBottom: "none" }}></TableCell>
        <TableCell align="left" sx={{ borderBottom: "none" }}>
          {WorkItem.fat}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable() {
  const [AllChecked, setAllChecked] = React.useState(false);

  const handleChange = (event) => {
    setAllChecked(event.target.checked);
  };
  return (
    <TableContainer component={Paper} style={{ width: 1200 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead style={{ backgroundColor: "lightblue", color: "white" }}>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={AllChecked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </TableCell>
            <TableCell
              align="left"
              style={{ width: 400, fontSize: 16, fontWeight: "bold" }}
            >
              Packages
            </TableCell>
            <TableCell
              align="left"
              style={{ width: 300, fontSize: 16, fontWeight: "bold" }}
            >
              Rate
              <Typography fontSize={11}>(in sqft)</Typography>
            </TableCell>
            <TableCell
              align="left"
              style={{ width: 300, fontSize: 16, fontWeight: "bold" }}
            >
              Total
            </TableCell>
            <TableCell
              style={{ width: 50, fontSize: 16, fontWeight: "bold" }}
            />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} AllChecked={AllChecked} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

{
  /* 2 Layer */
}

{
  /* <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
          
              <Table size="small" aria-label="purchases">
              
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                  <TableCell>
                    <Checkbox {...label} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>

                  <TableCell>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <RemoveRoundedIcon /> : <AddRoundedIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
              </Table>
       
          </Collapse>
        </TableCell>
      </TableRow> */
}
