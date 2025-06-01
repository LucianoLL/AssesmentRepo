// components/ProductDetails
// import CartItem from './CartItem';

import Link from 'next/link';
import Image from 'next/image';

export default function ProductDetails({data}) {
    const fixedPrice = data.price.toFixed(2);

    return(
        // {/* 
        // 'Return to Products' link:
        // Seemed conceptually easier to add a Link to a Button,
        // Doing so kept the same images assets between pages
        // rather than directly use 'href=' in Button.
        // */}
        <div className="justify-center rows-2 p-8 gap-16 shadow-md w-3/4">
            <div className='p-2'>
                <Link  
                    href="/"
                    className='rounded-md bg-blue-500 font-sans-serif font-bold p-2 text-white'>
                    ← Back to Products
                </Link>
            </div>
            
            {/* 
            A special Box to seperate contents into two columns
            */}
            
            <div className='flex columns-2 p-2 gap-2'>
                {/* Column 1: Product Image */}
                <div className='relative w-3/4'>
                    {
                        data.image &&
                        <Image 
                            alt='ProductImage'
                            fill
                            objectFit='contain'
                            src={data.image}/>
                    }
                </div>
                
                {/* Column 2: Details */}
                <div className='pl-2'>
                    <p className='text-2xl font-bold pb-2'>{data.name}</p>
                    <p className='text-blue-400 text-xl pb-2'>${fixedPrice}</p>
                    <p className='pb-2'>{data.description}</p>

                    <button className='rounded-md bg-blue-500 font-sans-serif font-bold p-2 text-white'>
                        Add to Cart
                    </button>
                </div>
            </div>
            
        </div>
            
                
    );
}