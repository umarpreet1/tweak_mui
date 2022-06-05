import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HomeIcon from '@mui/icons-material/Home';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import JobCard from "./JobCard";
import EducationCore from "./EducationCore";
import JobCore from "./JobCore";
import CertificateCard from "./CertificateCard";
import CertificateCore from "./CertificateCore";
import AchievementCore from "./AchievementCore";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
         <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function SecondaryNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <>
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" >
      <Tab icon={<SchoolIcon/>} label="Education" iconPosition="start"/>
      <Tab icon={<WorkIcon />} label="Job" iconPosition="start"/>
        <Tab icon={<PlaylistAddCheckIcon/>} label="Projects" iconPosition="start"/>
      <Tab icon={<EmojiEventsIcon />} label="Achievements" iconPosition="start" />
        <Tab icon={<WorkspacePremiumIcon />} label="Certificates" iconPosition="start" />
        <Tab icon={<VolunteerActivismIcon />} label="Volunteer" iconPosition="start" />

        <Tab icon={<HomeIcon />} label="Address" iconPosition="start" />
    </Tabs>
          <TabPanel value={value} index={0}>
              <EducationCore></EducationCore>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <JobCore></JobCore>
      </TabPanel>
      <TabPanel value={value} index={2}>

      </TabPanel>
      <TabPanel value={value} index={3}>
        <AchievementCore></AchievementCore>
      </TabPanel>

        <TabPanel index={4} value={value}>
          <CertificateCore></CertificateCore>
        </TabPanel>
          </>
  );
}
