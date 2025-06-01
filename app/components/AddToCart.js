// ./components/AddToCart
/*
References:
https://www.youtube.com/watch?v=02ieJ1YXZM4
https://www.youtube.com/watch?v=shLz_kmA68Q&t=119s
https://nextjs.org/docs/app/getting-started/server-and-client-components
*/

"use client"

export default function AddToCart({ product }){
    // Still need to figure out the cart functionality with localStorage
    return(
        <button
            className='rounded-md 
                bg-blue-500 
                font-sans-serif 
                font-bold 
                p-2 
                text-white
                cursor-pointer
                shadow-md
                object-bottom
                hover:bg-emerald-500'>
            Add to Cart
        </button>
    );
}