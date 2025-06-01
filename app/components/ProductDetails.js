// components/ProductDetails
// import CartItem from './CartItem';


import Link from 'next/link';
import Image from 'next/image';
import AddToCart from './AddToCart';

export default function ProductDetails({data}) {
    const fixedPrice = data.price.toFixed(2);

    return(
        // {/* 
        // 'Return to Products' link:
        // Seemed conceptually easier to add a Link to a Button,
        // Doing so kept the same images assets between pages
        // rather than directly use 'href=' in Button.
        // */}
        <div className="justify-center 
            rows-2 
            p-8 
            gap-16 
            shadow-md">
            <Link  
                href="/"
                className='rounded-md 
                    shadow-md
                    bg-blue-500 
                    font-sans-serif 
                    font-bold 
                    p-2 
                    text-white
                    hover:bg-emerald-500'>
                ← Back to Products
            </Link>
            
            {/* 
            A special Box to seperate contents into two columns
            */}
            
            <div className='flex flex-wrap p-2 pt-5 gap-2'>
                {/* Column 1: Product Image */}
                {
                    data.image &&
                    <Image
                        alt='ProductImage'
                        width={500}
                        height={500}
                        src={data.image}/>
                }
                
                {/* Column 2: Details */}
                <div className='pl-2'>
                    <p className='text-5xl font-bold pb-2'>{data.name}</p>
                    <p className='text-blue-400 text-xl pb-2'>${fixedPrice}</p>
                    <p className='pb-2'>{data.description}</p>

                    <AddToCart product={{data}}/>
                </div>
            </div>
            
        </div>
            
                
    );
}