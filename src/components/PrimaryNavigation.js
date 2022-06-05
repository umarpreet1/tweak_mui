import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeedIcon from '@mui/icons-material/Feed';
import PeopleIcon from '@mui/icons-material/People';
import SaveIcon from '@mui/icons-material/Save';
;
export default function PrimaryNavigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" >
      <Tab icon={<FeedIcon/>} label="Information" iconPosition="start"/>
      <Tab icon={<PeopleIcon />} label="Profiles" iconPosition="start"/>
      <Tab icon={<SaveIcon />} label="Templates" iconPosition="start" />
    </Tabs>
  );
}
