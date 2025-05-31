// product/[id]/page.js

/*
References:
https://nextjs.org/docs/app/api-reference/functions/generate-static-params
https://www.geeksforgeeks.org/next-js-functions-generatestaticparams/
Google Gemini's AI Overview
*/

import axios from "axios";
// import { useRouter } from "next/router";
import ProductDetails from "@/app/components/ProductDetails";


export async function generateStaticParams() {
    try {
        const response = await axios.get('https://cart-api.alexrodriguez.workers.dev/products');
        const data = response.data;

        const paths = data.map((product) => ({
            id: product.id,
        }));

        console.log(paths)

        return paths
        
        // return data

    } catch (error) {
        console.error(error)
        return 

    }
}


export default async function Page({params}) {
    const {id} = await params

    return (
         <div className="flex justify-center p-8 gap-16 sm:p-20">
            {/* <ProductDetails data={productData} /> */}
            TEMP
        </div>
    )
}
