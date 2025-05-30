// components/CartItem.js
/*
References:
https://www.youtube.com/watch?v=02ieJ1YXZM4
https://www.youtube.com/watch?v=shLz_kmA68Q&t=119s
*/
"use client"

import React, {useState, useEffect} from "react";

export default function CartItem({ functionality }) {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    if (functionality === "addToCart") {
        return <addToCart />
    }
}