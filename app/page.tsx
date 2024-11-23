"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        const url = process.env.NEXT_PUBLIC_API_URL;
        if (url) {
            const response = await fetch(url);
            const data = await response.json();
            setTours(data);
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    console.log(tours);

    return <div>Hello</div>;
}
