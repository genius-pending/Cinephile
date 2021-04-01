
const router = require('express').Router();
const fetch = require('node-fetch');
require('dotenv').config();


router.get('/getmovies/:search', async (req, res) => {
  const apikey = process.env.TREFFLE_API_KEY
  const search = req.params.search
  const queryURL = `https://trefle.io/api/v1/plants/search?token=${apikey}&q=${search}`;
  const fetch_response = await fetch(queryURL);
  const payload = await fetch_response.json();
  res.json(payload);
});




module.exports = router;