import * as React from "react";
import Button from "@mui/material/Button";
import Header from "./Header/Header";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Nav from "./Nav/Nav";
import TableMain from "./Main/TableMain";
import Other from "./Main/Other";
import SideDrawer from './Header/SideDrawer'
export default function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //Slide Drawer

  
  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 5 }}>
        <Header />
       
        <Box sx={{ mt: 5 }}>
          {" "}
          <Nav value={value} handleChange={handleChange} />
        </Box>

        <Box sx={{ mt: 5 }}>{value === "1" ? <TableMain /> : <Other />}</Box>
        {/* <Button variant="contained">Hello World</Button> */}
      </Box>
    </Container>
  );
}
