// product/[id]/page.js

/*
References:
https://nextjs.org/docs/app/api-reference/functions/use-params
https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes
https://nextjs.org/docs/app/api-reference/file-conventions/page
https://www.youtube.com/watch?v=N4-EkNJ6RFM
Google Gemini's AI Overview
*/
"use client"

import React, {useState, useEffect} from "react"
import { useParams } from "next/navigation";
import axios from "axios";

export default function productPage() {
    const [data, setData,] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null);
    /*
    The line below was suggested from Google's AI overview,
    most of my resources were used to cross-reference and
    understanding the function.
    */
    const {id} = useParams();

    useEffect(() => {
        axios
            .get(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
            .then ((response) => {
                setData(response.data);
                setLoading(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading Page ...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div className="flex justify-center items-center min-h-screen p-8 gap-16 sm:p-20">
            <p>{data.name}</p>
        </div>
    );
}