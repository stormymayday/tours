import { useState, useEffect } from "react";
import Loading from "./components/Loading.jsx";
import Tours from "./components/Tours.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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

      } catch (error) {

        setIsError(true);
        console.error(error);

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
        <h1>there was an error</h1>
      </main>
    );
  }

  return (
    <Tours />
  );

};
export default App;
