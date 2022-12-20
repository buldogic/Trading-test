import * as React from "react";
import "./App.css";
import { Box, Tabs, Tab } from "@mui/material";
import { Trading } from "./Trading";
import { ArchiveTrading } from "./ArchiveTrading";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [value, setValue] = React.useState(0);
  const [deals, setDeals] = React.useState([]);

  const addDeal = (deal) => {
    const newDeals = [...deals, deal];
    //incremental update todo
    setDeals(newDeals);
  };

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Trading" />
          <Tab label="Archive" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Trading addDeal={addDeal} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ArchiveTrading deals={deals} />
      </TabPanel>
    </div>
  );
}

export default App;
