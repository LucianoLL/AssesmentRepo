// components/ProductDetails

import Link from 'next/link';
import{
    Box,
    Button,
    Typography,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
} from '@mui/material';

export default function ProductDetails({data}) {
    const fixedPrice = data.price.toFixed(2);
    return(
        <Card className='min-w-3/4'>
            {/* 
            'Return to Products' link:
            Seemed conceptually easier to add a Link to a Button,
            Doing so kept the same images assets between pages
            rather than directly use 'href=' in Button.
            */}
            <CardContent>
                <Button variant='contained'>
                    <Link className='font-bold' href="/">
                        ← Back to Products
                    </Link>
                </Button>
            </CardContent>
            
            {/* 
            A special Box to seperate contents into two columns
            */}
            <Box className='columns-2'>
                {/* Column 1: Product Image */}
                <CardContent>
                    {
                        data.image &&
                        <CardMedia
                        className='w-sm'
                        component={"img"}
                        image={data.image}/>
                    }
                </CardContent>
                
                {/* Column 2: Details */}
                <CardContent>
                    <Typography>{data.name}</Typography>
                    <Typography>${fixedPrice}</Typography>
                    <Typography>{data.description}</Typography>

                    <CardActions>
                        <Button>Add to Cart</Button>
                    </CardActions>
                </CardContent>

            </Box>
                

            
                
                
                
        </Card>
    );
}