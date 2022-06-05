

import Container from "@mui/material/Container";
import EducationCard from "./EducationCard";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import CertificateCard from "./CertificateCard";


const certificates = [
    {
        "id": 0,
        "name_":"NLP Coursera",
        "descriptions":["This is just a first description","I just want to add another description in case i need it for something else","a last but not the least description"],
        "whereDone":"Coursera",
        "whenDone":"2019"
    },
    {
         "id": 1,
        "name_":"AI Coursera",
        "descriptions":["This is just a first description","I just want to add another description in case i need it for something else",],
        "whereDone":"Coursera",
        "whenDone":"2021"
    },
    {
         "id": 2,
        "name_":"React Certificate",
        "descriptions":["I just want to add another description in case i need it for something else","a last but not the least description"],
        "whereDone":"React Udemy Course",
        "whenDone":"2022"
    }

];


export default function CertificateCore() {
    return (<Container sx={{marginTop:"10px"}}>
        <Box>
            <Button variant="contained" color="success" sx={{marginLeft:"80%"}}> Add New</Button>
        </Box>

        <Grid container spacing={4} marginTop={5} >
            {certificates.map((certificate) =>
                <Grid item >
                    <CertificateCard certificate={certificate} key={certificate.id}>
                    </CertificateCard>
                </Grid>
            )}
        </Grid>
    </Container>);
}