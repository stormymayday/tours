"use client";

import { TourType } from "@/types";
import { fetchTours } from "@/utils";
import { useState, useEffect } from "react";

import Loading from "@/components/Loading";
import Tours from "@/components/Tours";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [tours, setTours] = useState<TourType[]>([]);

    const removeTour = (id: string) => {
        const newTours = tours.filter((tour) => {
            return tour.id !== id;
        });
        setTours(newTours);
    };

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

    useEffect(() => {
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

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <div className="title-underline"></div>
                    <button className="btn mt-10" onClick={getData}>
                        fetch tours
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
}
