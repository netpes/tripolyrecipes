import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';





export default function BasicCard(props) {

    function Navigate(id){
     window.location.href = id;
    }
    return (
        <Card  sx={{ width: "150px", display: "inline"}} onClick={()=>Navigate(props.value.index)}>
        <CardActionArea sx={{height:"100%"}}>
          <CardContent>
      
            <Typography variant="h5" component="div" sx={{ textAlign:"right",float:"right"}}>
                    {props?.value?.title}
                </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    
    );
}