import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');  // Fetch from your backend API route
        setNewsArticles(response.data);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to fetch news');
      }
    };

    fetchNews();
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial' }}>
      <header style={{ fontStyle: 'italic', textAlign: 'center' }}>
        <h1>Welcome to SKP News Page</h1>
      </header>

      <div style={{ padding: '20px' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {newsArticles.length > 0 ? (
          newsArticles.map((article, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2 style={{ color: 'lightblue' }}>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" style={{ color: 'yellow' }}>
                Read More
              </a>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
