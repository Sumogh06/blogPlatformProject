import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const newsApiUrl = 'https://gnews.io/api/v4/top-headlines';
  
  try {
    const response = await axios.get(newsApiUrl, {
      params: {
        category: 'general',  // You can change this based on the news category
        lang: 'en',           // Language set to English
        country: 'us',        // Set the country (you can change this)
        max: 10,              // Number of articles to fetch
        apikey: apiKey,       // Your API Key for GNews
      },
    });
    res.status(200).json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news:', error.response || error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
