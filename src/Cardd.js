import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function Cardd({products}) {
 console.log(products)
  return (
    <div className="card">
      {products.map(el=>{
        return(
          <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={el.photos}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {el.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {el.slogan}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {el.description}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {el.default_price}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
        )
      })}
    </div>

    
    
  )
}
