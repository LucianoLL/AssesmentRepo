// components/Cards.js

import Link from 'next/link'
import {Card, CardContent, CardMedia} from '@mui/material';

export default function ProductCard({name, image, price}) {
    return(
        <Card>
            <CardContent>
                {
                    image && 
                    <CardMedia
                    component="img"
                    image={image}/>
                }
                {name}
                <br></br>
                {price}
            </CardContent>
        </Card>
    );
}