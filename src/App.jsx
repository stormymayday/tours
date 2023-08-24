import { useState, useEffect } from "react";
import Loading from "./components/Loading.jsx";
import Tours from "./components/Tours.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const removeTour = (id) => {

    const newTours = tours.filter((tour) => {

      return tour.id !== id;

    });

    setTours(newTours);

  };

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

  useEffect(() => {

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

  // Refetching Tours
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" style={{ marginTop: '2rem' }} onClick={fetchTours}>refresh</button>
        </div>
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
