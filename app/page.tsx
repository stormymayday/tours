"use client";

import { TourType } from "@/types";
import { fetchTours } from "@/utils";
import { useState, useEffect } from "react";

import Loading from "@/components/Loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [tours, setTours] = useState<TourType[]>([]);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            const { data, isError, errorMessage } = await fetchTours(
                process.env.NEXT_PUBLIC_API_URL || ""
            );

            setTours(data);
            setIsError(isError);
            setErrorMessage(errorMessage);
            setIsLoading(false);
        };

        getData();
    }, []);

    console.log(tours);

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (isError) {
        return <main>{errorMessage}</main>;
    }

    return <main>Hello</main>;
}
