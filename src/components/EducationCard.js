import {Card} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EducationCard({education}){
    return (<Card sx={{width:"300px"}}  elevation={4}>
        <Box sx={{marginX:"15px",marginTop:"7px"}}>
            <Box sx={{height:"100px"}}>
        <Typography variant="h5" component="h5">
            {education.college}
        </Typography>
            <Typography variant="h6" component="h6" sx={{color:"gray"}}> {education.country}</Typography>
            </Box>
            <Typography variant="subtitle1" component="h6" marginTop="15px">
                {education.degree} - {education.major}
            </Typography>
            <Typography variant="caption" component="h6" marginTop="15px">
                {education.cgpa}/{education.scaling}  ({education.admit} - {education.passing})
            </Typography>
            <Box marginTop="15px" marginLeft="70%" marginBottom="15px">

                <EditIcon></EditIcon>
                <DeleteIcon sx={{marginLeft:"10px"}}></DeleteIcon>

            </Box>
        </Box>
    </Card>);
}