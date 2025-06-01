// components/ProductCards.js

/*
References:
https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating
*/

import Link from 'next/link';
import Image from 'next/image';

export default function ProductCard({id, image, name, price}) {
    const fixedPrice = price.toFixed(2);
    return(
        // House entire Grid and Card in a Link component
        <Link 
            href={`./product/${id}`}
            className='hover:-translate-y-4 hover:shadow-xl/20'>
            {/* 
            Gave the Card component the set dimensions if 75x70, trying to create 
            a subtle rectangle
            */}
            <div className='w-75 h-70 shadow-md rounded-md'>
                {/* Set the image height to 3/4 of the space, with hiding overflow */}
                <div className='relative overflow-hidden h-3/4 justify-center'>
                    {
                        image && 
                        // Gave an image a wifth of 75, and used negative margins
                        <Image
                            alt='ProductImage'
                            fill
                            objectFit='cover'
                            className='rounded-t-md'
                            src={image}
                        />
                    }
                </div>
                {/* Basic text for the product details */}
                <div className='p-3 font-sans font-bold'>
                    <p>{name}</p>
                    <p className='text-blue-400'>${fixedPrice}</p>

                </div>
                
            </div>
        </Link>
        
    );
}