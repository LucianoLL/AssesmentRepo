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
    Grid,
    Typography,
} from '@mui/material';

export default function ProductCard({id, image, name, price}) {
    const fixedPrice = price.toFixed(2);
    return(
        <Link href={`./product/${id}`}>
            <Grid className='
                    hover:shadow-xl/30 
                    shadow-blue-500 rounded-md
            '>
                <Card className='
                    rounded-md
                    border-6
                    border-transparent 
                    hover:border-blue-500
                    w-75
                '>
                    {
                        image && 
                        <CardMedia
                            component={"img"}
                            image={image}
                        />
                    }
                    <CardContent>
                        <Typography sx={{
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                            }}
                            variant='h5'
                        >
                            {name}
                        </Typography>
                        <Typography sx={{
                            color: "blue",
                            font: "sans-serif",
                            fontWeight: "bold",
                            fontSize: "14"
                        }}>
                            ${fixedPrice}    
                        </Typography>
                        
                    </CardContent>
                </Card>
            </Grid>
        </Link>
        
    );
}