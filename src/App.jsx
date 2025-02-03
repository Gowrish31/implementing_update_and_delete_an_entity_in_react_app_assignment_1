import { useEffect, useState } from "react";
import UpdateItem from "./components/UpdateItem";
import axios from 'axios';

// use the following link to get the data
// `/doors` will give you all the doors, to get a specific door use `/doors/1`.
const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URI}/1`);
        setItem(response.data);
        console.log(response.data);
      } catch (er) {
        console.error(er);
      } finally {
        setLoading(false); // update loading state once the request completes
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // show loading state
  }

  return <UpdateItem item={item} />;
}

export default App;
