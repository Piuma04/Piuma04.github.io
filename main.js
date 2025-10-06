const API_KEY = "62e9afa9b26ec1658e4f7c572663a19b"
const url1 = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`;
const url2 = `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&language=en-US`;

const options = {
  method: 'GET',
};

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// allow parsing JSON bodies (useful later if you want POST /comentario)
app.use(express.json())

app.get('/trendingTVShow', async (req, res) => {
  try {
    
    const response = await fetch(url1, options);
    const data = await response.json();
    res.json(data.results[4]);
  } catch (err) {
    console.error('Error fetching TMDB:', err);
    res.status(500).json({ error: 'Failed to fetch trending TV shows' });
  }

});


// Accept idMovie via query string (?idMovie=123) or route param (/comentario/123)
app.get(['/comentario', '/comentario/:idMovie'], async (req, res) => {
  const idFromQuery = req.query.idMovie;
  const idFromParams = req.params.idMovie;
  const idMovie = idFromQuery || idFromParams;

  if (!idMovie) {
    return res.status(400).json({ error: 'Missing required parameter idMovie' });
  }

  try {
    
    const response = await fetch(url2, options);
    const data = await response.json();
    res.json(data.results[4]);
  } catch (err) {
    console.error('Error fetching TMDB:', err);
    res.status(500).json({ error: 'Failed to fetch trending TV shows' });
  }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
