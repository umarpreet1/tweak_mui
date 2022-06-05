import Container from "@mui/material/Container";
import EducationCard from "./EducationCard";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";


const educations = [
    {
        "id": 0,
        "college": "University of Toronto",
        "degree": "Masters of Engineering",
        "major": "Computer Engineering",
        "cgpa": "3.67",
        "scaling": "4.0",
        "admit": "2021",
        "passing": "2024",
        "country":"CANADA"
    },
    {
        "id": 1,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019",
        "country":"INDIA"
    },
    {
        "id": 2,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019",
        "country":"INDIA"
    },
    {
        "id": 3,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019",
        "country":"INDIA"
    },
    {
        "id": 4,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019"
        ,"country":"INDIA"
    },
    {
        "id": 5,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019",
        "country":"INDIA"
    },
    {
        "id": 6,
        "college": "Thapar University",
        "degree": "Bachelor of Engineering",
        "major": "Software Engineering",
        "cgpa": "8.84",
        "scaling": "10.0",
        "admit": "2015",
        "passing": "2019",
        "country":"INDIA"
    }
];


export default function DashboardCore() {
    return (<Container sx={{marginTop:"10px"}}>
        <Box>
            <Button variant="contained" color="success" sx={{marginLeft:"80%"}}> Add New</Button>
        </Box>

        <Grid container spacing={4} marginTop={5} >
            {educations.map((education) =>
                <Grid item >
                    <EducationCard education={education} key={education.id}>
                    </EducationCard>
                </Grid>
            )}
        </Grid>
    </Container>);
}