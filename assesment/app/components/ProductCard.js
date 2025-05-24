// components/ProductCards.js

/*
References:
https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
*/

import Link from 'next/link';
import {
    Card, 
    Grid,
} from '@mui/material';

export default function ProductCard({id, image, name, price}) {
    const fixedPrice = price.toFixed(2);
    return(
        // House entire Grid and Card in a Link component
        <Link href={`./product/${id}`}>
            <Grid>
                {/* 
                Gave the Card component the set dimensions if 75x70, trying to create 
                a subtle rectangle
                */}
                <Card className='w-75 h-70'>
                    {/* Set the image height to 3/4 of the space, with hiding overflow */}
                    <div className='overflow-hidden h-3/4 justify-center'>
                        {
                            image && 
                            // Gave an image a wifth of 75, and used negative margins
                            <img
                                className='w-75 -mt-10'
                                src={image}
                            />
                        }
                    </div>
                    {/* Basic text for the product details */}
                    <div className='p-3 font-sans font-bold'>
                        <p>{name}</p>
                        <p className='text-blue-400'>${fixedPrice}</p>

                    </div>
                    
                </Card>
            </Grid>
        </Link>
        
    );
}