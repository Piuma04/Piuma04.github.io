const API_KEY = "62e9afa9b26ec1658e4f7c572663a19b"
const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`;
const options = {
  method: 'GET',
};

const express = require('express')
const app = express()
const port = 3000

app.get('/trendingTVShow', async (req, res) => {
  try {
    // fetch the TMDB endpoint and await the JSON body
    const response = await fetch(url, options);
    const data = await response.json();
    // send the parsed JSON to the client
    res.json(data.results[4]);
  } catch (err) {
    console.error('Error fetching TMDB:', err);
    res.status(500).json({ error: 'Failed to fetch trending TV shows' });
  }

});


app.get('/comentario', (req, res) => {
  res.json({ message: 'comentario endpoint (placeholder)' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
