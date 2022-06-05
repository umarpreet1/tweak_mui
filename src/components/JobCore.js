import Container from "@mui/material/Container";
import EducationCard from "./EducationCard";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import JobCard from "./JobCard";


const jobs = [
    {
        "id": 0,
        "company": "Samsung Research",
        "roles":["Software Engineer","Senior Software Engineer"],
        "duration":"3 years",
        "from":"2019",
        "to":"2021",
        "country":"INDIA"
    },
    {
        "id": 1,
        "company": "University of Toronto ",
        "roles":["Research Assistant"],
        "duration":"3 months",
        "from":"2022",
        "to":"Present",
        "country":"CANADA"
    },

];


export default function JobCore() {
    return (<Container sx={{marginTop:"10px"}}>
        <Box>
            <Button variant="contained" color="success" sx={{marginLeft:"80%"}}> Add New</Button>
        </Box>

        <Grid container spacing={4} marginTop={5} >
            {jobs.map((job) =>
                <Grid item >
                    <JobCard job={job} key={job.id}>
                    </JobCard>
                </Grid>
            )}
        </Grid>
    </Container>);
}