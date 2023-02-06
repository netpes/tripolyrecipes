import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard(props) {


    function Navigate(id){
     window.location.href = id;
    }
    return (
        <Card sx={{ width: "150px", display: "inline"}} onClick={()=>Navigate(props.value.index)}>
            <CardContent>

                <Typography variant="h5" component="div">
                    {props.value.title}
                </Typography>


            </CardContent>
        </Card>
    );
}