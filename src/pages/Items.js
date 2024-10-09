import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { backdropClasses } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const Items = () =>
    <div>
        <Card sx={{ maxWidth: 200 }}>
            <CardContent>
                {
                    <Avatar sx={{ backgroundColor: 'red',m:'auto', width:100, height:100}} aria-label="recipe">
                        R
                    </Avatar>
                }
            </CardContent>
            <CardContent sx={{ textAlign : 'center'}}>
                <Typography gutterBottom variant="h5" component="div">
                    Cheese burger
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    burger
                </Typography>
            </CardContent>
            <CardActions >
                <Button sm={{ backgroundcolor: 'blue', color: 'white' }} size="small">Share</Button>
            </CardActions>
        </Card>


    </div>;
export default Items;