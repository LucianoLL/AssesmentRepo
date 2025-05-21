// components/ProductAPI.js
/*
References:
https://www.geeksforgeeks.org/axios-in-react-a-guide-for-beginners/
*/
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';
import ProductCard from './Card';

export default function ProductAPI() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("https://cart-api.alexrodriguez.workers.dev/products")
            .then((response) => {
                setData(response.data);
            })
    }, []);
    return(
        <Grid container spacing={4}>
            {data.map((product) => (
                <Grid key={product.id}>
                    <ProductCard
                        name={product.name}
                        image={product.image}
                        price={product.price}/>
                </Grid>
            ))}
            
        </Grid>
    );
}