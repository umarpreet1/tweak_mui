

import Container from "@mui/material/Container";
import EducationCard from "./EducationCard";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";
import CertificateCard from "./CertificateCard";
import AchievementCard from "./AchievementCard";


const achievements = [
    {
        "id": 0,
        "name_":"Samsung Citizen",
        "descriptions":["This is just a first description","I just want to add another description in case i need it for something else","a last but not the least description"],
        "whereDone":"Samsung",
        "whenDone":"2021"
    },
    {
         "id": 1,
        "name_":"Samsung Professional",
        "descriptions":["This is just a first description","I just want to add another description in case i need it for something else",],
        "whereDone":"Samsung",
        "whenDone":"2021"
    },
    {
         "id": 2,
        "name_":"Scholarship",
        "descriptions":["I just want to add another description in case i need it for something else","a last but not the least description"],
        "whereDone":"Thapar University",
        "whenDone":"2019"
    }

];


export default function AchievementCore() {
    return (<Container sx={{marginTop:"10px"}}>
        <Box>
            <Button variant="contained" color="success" sx={{marginLeft:"80%"}}> Add New</Button>
        </Box>

        <Grid container spacing={4} marginTop={5} >
            {achievements.map((achievement) =>
                <Grid item >
                    <AchievementCard achievement={achievement} key={achievement.id}>
                    </AchievementCard>
                </Grid>
            )}
        </Grid>
    </Container>);
}