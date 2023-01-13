import React from "react";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SideDrawer from "./SideDrawer";
export default function Header() {
  return (
    <Container
    sx={{
        // flexDirection: 'row',

        display: "flex",
        alignItems: "center",
        // alignContent: "center",
        // justifyContent: "center",
        // alignSelf:'center'
      }}
    >
      
        <Box>
          <ArrowBackIosNewRoundedIcon />
        </Box>
        <Box sx={{ mr: 10 }}>
          <Typography fontSize={18}>
            <strong>Workorder</strong>
          </Typography>
        </Box>
   
      <Box sx={{ mx: "80%" }}>
        <SideDrawer />
      </Box>
    </Container>
  );
}
