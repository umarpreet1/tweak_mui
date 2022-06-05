import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {Card} from "@mui/material";

export default function JobCard({job}){
    return (
        <Card sx={{width:"300px"}}  elevation={4}>
        <Box sx={{marginX:"15px",marginTop:"7px"}}>
            <Box sx={{height:"100px"}}>
        <Typography variant="h5" component="h5">
            {job.company}
        </Typography>
            <Typography variant="h6" component="h6" sx={{color:"gray"}}> {job.country}</Typography>
            </Box>
            <Box marginTop="15px" sx={{height:"100px"}}>
                {job.roles.map((role) => (
                    <Typography variant="subtitle1" component="h6" >* {role}</Typography>
                ))}
            </Box>
            <Typography variant="caption" component="h6"  marginTop="15px">
                {job.duration} ({job.from} - {job.to})
            </Typography>
            <Box marginTop="15px" marginLeft="70%" marginBottom="15px">
                <EditIcon/>
                <DeleteIcon sx={{marginLeft: "10px"}}/>

            </Box>
        </Box>
    </Card>
    );
}