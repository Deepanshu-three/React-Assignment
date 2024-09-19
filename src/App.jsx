import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setData(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>; // Center loading text

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Watch New Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data.map((e) => (
          <Card 
            key={e.id} // Unique key for each card
            movieName={e.movie} 
            imdbUrl={e.imdb_url} 
            rating={e.rating} 
            imgUrl={e.image} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
