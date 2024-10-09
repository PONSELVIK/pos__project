import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';
import IconButton from '@mui/material/IconButton';

const Counter = () =>
    <div sx={{ display: 'flex',flexDirection: 'center', gap: 2}}>
        <Card sx={{ minWidth: 100, textAlign: 'center'}}>
            <CardContent>

            <IconButton
                    type="button"
                    sx={{
                        color: 'blue',
                        mt: 2,
                        display: { xs: 'inline', md: 'inline-block' },
                        mr: 1,
                    }}
                >
                    <AddCircleOutlineTwoToneIcon />
                </IconButton>
                
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 18 ,fontWeight: 'bold'}}>
                    New Order
                </Typography>
            </CardContent>
        </Card>
        <Typography sx={{ color: 'blue', textAlign: 'center' }}>
            Pending Sales (park):0
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',textAlign: 'center' }}>
            No pending
        </Typography>

    </div>;

export default Counter;
