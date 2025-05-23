// components/ProductCards.js

/*
References:
https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
*/

import Link from 'next/link';
import {
    Card, 
    CardContent, 
    CardHeader, 
    CardMedia,
} from '@mui/material';

export default function ProductCard({id, image, name, price}) {
    const fixedPrice = price.toFixed(2)
    return(
        <Link href={`./product/${id}`}>
            <Card>
                {
                    image && 
                    <CardMedia
                    component={"img"}
                    image={image}/>
                    
                }
                <CardContent>
                    {name}
                    <br></br>
                    {fixedPrice}
                </CardContent>
            </Card>
        </Link>
        
    );
}