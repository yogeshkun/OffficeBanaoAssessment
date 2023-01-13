import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import DrawerContent from "../Drawer/DrawerContent";

export default function SideDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
    // sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    // role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerContent />
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
           
            // color="secondary"
            sx={{
              width: 150,
              bgcolor: "#64d4d4",
              // display: "flex",
              // flexDirection: 'row-reverse',
              // justifyContent: 'flex-end',
              color:"white",
              fontSize:14,
              fontWeight:'bold',
              ':hover': {
                bgcolor: '#8edce1', 
                color: 'white',
              },
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            Save
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                width: 450,
                elevation: 1,
                //   border:"1px solid red",
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20,
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
