import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { IconButton } from '@mui/material';

const Items = () => {
    const [cards, setCards] = useState([
        { id: 1, title: 'Cheese Burger', description: 'burger' },
    ]);

    const addCard = () => {
        const newCard = {
            id: cards.length + 1,
            title: `New Item ${cards.length + 1}`,
            description: 'burger'
        };
        setCards([...cards, newCard]);
    };
    return (
        <Box display='flex' alignItems= 'center' gap='2' flexWrap='wrap'>
              <Box display="flex" gap="2" flexWrap="wrap">
                {cards.map((card) => (
                    <Card key={card.id} sx={{ maxWidth: 200 }}>
                        <CardContent>
                            <Avatar sx={{ backgroundColor: 'red', m: 'auto', width: 100, height: 100 }} aria-label="recipe">
                                {card.title.charAt(0)}
                            </Avatar>
                        </CardContent>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography gutterBottom variant="h5" component="div">
                                {card.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" sx={{ backgroundColor: 'blue', color: 'white', width: 200 }}> 100</Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>

            <IconButton
                type="button"
                onClick={addCard}
                sx={{ fontSize: 30, color: 'blue',display: { xs: 'inline', md: 'inline-block' },}}
            >
                <AddCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
        </Box>
    );
};
export default Items;