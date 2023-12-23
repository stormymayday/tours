import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);

    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => {
            return id !== tour.id;
        });

        setTours(newTours);
    };

    useEffect(() => {
        const fetchTours = async () => {
            // For re-fetching
            setIsLoading(true);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setIsError(true);
                    return;
                }

                const data = await response.json();

                setTours(data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchTours();
    }, []);

    if (isLoading) {
        return (
            <main>
                <Loading />
            </main>
        );
    }

    if (isError) {
        return (
            <main>
                <h1>There was an error</h1>
            </main>
        );
    }

    return (
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
    );
};
export default App;
