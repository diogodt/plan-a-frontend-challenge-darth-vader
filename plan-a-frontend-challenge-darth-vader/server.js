const cors = require('cors');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;
const API_BASE_URL = 'https://api.themoviedb.org';

app.use(cors());

app.use('/', (req, res) => {
  const url = `${API_BASE_URL}${req.url}`;
  req.pipe(request(url)).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
