import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const cardData = [
    {
      title: 'Card Title 1',
      description: 'Description for card 1.',
    },
    {
      title: 'Card Title 2',
      description: 'Description for card 2.',
    },
    {
      title: 'Card Title 3',
      description: 'Description for card 3.',
    },
    {
      title: 'Card Title 4',
      description: 'Description for card 4.',
    },
  ];

export default function More() {
  return (
      <Box sx={{ display: 'flex',flexWrap:'wrap',flexDirection: 'space-between', gap: 2}}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ minWidth: 275, mt:2 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2">
              {card.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

