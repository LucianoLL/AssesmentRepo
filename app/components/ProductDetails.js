// components/ProductDetails
// import CartItem from './CartItem';
import Link from 'next/link';
import{
    Button,
    Card,
} from '@mui/material';

export default function ProductDetails({data}) {
    const fixedPrice = data.price.toFixed(2);
    // const addToCart = CartItem("addToCart");

    return(
        <Card className='w-200'>
            {/* 
            'Return to Products' link:
            Seemed conceptually easier to add a Link to a Button,
            Doing so kept the same images assets between pages
            rather than directly use 'href=' in Button.
            */}
            <div className='p-2'>
                <Button variant='contained'>
                    <Link className='font-bold' href="/">
                        ← Back to Products
                    </Link>
                </Button>
            </div>
            
            {/* 
            A special Box to seperate contents into two columns
            */}
            <div className='flex columns-2 p-2 gap-2'>
                {/* Column 1: Product Image */}
                <div>
                    {
                        data.image &&
                        <img className='w-100' src={data.image}/>
                    }
                </div>
                
                {/* Column 2: Details */}
                <div className='pl-2'>
                    <p className='text-2xl font-bold pb-2'>{data.name}</p>
                    <p className='text-blue-400 text-xl pb-2'>${fixedPrice}</p>
                    <p className='pb-2'>{data.description}</p>

                    <Button variant='contained'>
                        Add to Cart
                    </Button>
                </div>

            </div>
                

            
                
                
                
        </Card>
    );
}