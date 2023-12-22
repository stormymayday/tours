import { useEffect, useState } from "react";

import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [isError, setIsError] = useState(false);

    const [tours, setTours] = useState([]);

    useEffect(() => {
        const fetchTours = async () => {
            // For re-fetching
            setIsLoading(true);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                }

                const data = await response.json();

                setTours(data);
                // console.log(data);
            } catch (error) {
                setIsError(true);
            }

            setIsLoading(false);
        };

        fetchTours();
    }, []);

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        );
    }

    if (isError) {
        return (
            <>
                <h1>There was an error</h1>
            </>
        );
    }

    return <Tours tours={tours} />;
};
export default App;
