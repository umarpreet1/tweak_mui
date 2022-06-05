import React from 'react';
import ReactDOM from 'react-dom/client';

import ResponsiveAppBar from "./components/AppBar";
import PrimaryNavigation from "./components/PrimaryNavigation";
import SecondaryNavigation from "./components/SecondaryNavigation";

import DashboardCore from "./components/DashboardCore";
import Container from "@mui/material/Container";
import './index.css';

function App() {
  return (<>
      <ResponsiveAppBar/>
            <Container >
            <PrimaryNavigation />
            <SecondaryNavigation />

                </Container>
      </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


