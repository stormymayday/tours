import { useState, useEffect } from "react";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const [tours, setTours] = useState(null);

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
