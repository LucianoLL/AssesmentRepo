// components/ProductGrid.js
/*
References:
https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/
*/
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

export default function ProductGrid() {
    const [data, setData] = useState([]);
    const [loading, setLoading] =useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get("https://cart-api.alexrodriguez.workers.dev/products")
            // If we get a successful response then we do the following.
            .then((response) => {
                setData(response.data);
                setLoading(false)
            })
            // Catching any errors that might occur when requesting from API
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            })
    }, []);

    // Loading message when rendering product cards.
    if (loading) return <div>Loading Products ...</div>;
    // Error message if we did end up catching an error.
    if (error) return <div>Error: {error}</div>;

    return(
        <Grid container spacing={4} alignItems={'stretch'}>
            {data.map((product) => (
            <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
            />                   
            ))}
        </Grid>
    );
}