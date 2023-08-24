import { useState, useEffect } from "react";
import Loading from "./components/Loading.jsx";
import Tours from "./components/Tours.jsx";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    const fetchTours = async () => {

      try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchTours();

  }, []);

  return <h2>Tours Starter</h2>;

};
export default App;
