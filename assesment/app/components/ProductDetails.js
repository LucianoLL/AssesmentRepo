// components/ProductDetails

import Link from 'next/link';
import { Box, Button } from '@mui/material';
import{
    Card,
    CardContent,
    CardMedia
} from '@mui/material'

export default function ProductDetails({data}) {
    const fixedPrice = data.price.toFixed(2);
    return(
        <Card>
            <Button href="/">Back to Products</Button>
            <CardMedia
            component={"img"}
            image={data.image}/>
            <CardContent>
                {data.name}
                {fixedPrice}
                {data.description}
            </CardContent>
        </Card>
    );
}