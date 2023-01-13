import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function LabTabs({ value, handleChange }) {
  console.log(value);

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="black"
           
            TabIndicatorProps={{ style: { background: "black"} }}
            
          
          >
            <Tab
              label="Overview"
              value="1"
              style={{ minWidth: "20%" }}
              sx={{ fontSize: 14, fontWeight: "bold" }}
            />
            <Tab
              label="Other"
              value="2"
              style={{ minWidth: "20%" }}
              sx={{ fontSize: 14, fontWeight: "bold" }}
            />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
  );
}
