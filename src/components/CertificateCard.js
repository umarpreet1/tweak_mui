import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {Card} from "@mui/material";

export default function CertificateCard({certificate}){
    return (
        <Card sx={{width:"300px"}}  elevation={4}>
        <Box sx={{marginX:"15px",marginTop:"7px"}}>
            <Box sx={{height:"70px"}}>
        <Typography variant="h5" component="h5">
            {certificate.name_}
        </Typography>

            </Box>
            <Box marginTop="15px" sx={{height:"300px"}}>
                {certificate.descriptions.map((description) => (
                    <Typography variant="subtitle1" component="h6" >* {description}</Typography>
                ))}
            </Box>
            <Typography variant="caption" component="h6"  marginTop="15px">
                {certificate.whereDone} - {certificate.whenDone}
            </Typography>
            <Box marginTop="15px" marginLeft="70%" marginBottom="15px">
                <EditIcon/>
                <DeleteIcon sx={{marginLeft: "10px"}}/>

            </Box>
        </Box>
    </Card>
    );
}