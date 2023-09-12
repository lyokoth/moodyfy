var express = require('express')
var app = express()

const port = 5000 


app.use(express.static(__dirname + '/public'));
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})


const queryString = require("node:querystring");
const axios = require("axios");

app.get("/account", async (req, res) => {
  const spotifyResponse = await axios.post(
      "https://accounts.spotify.com/api/token",
      queryString.stringify({
        grant_type: "authorization_code",
        code: req.query.code,
        redirect_uri: process.env.REDIRECT_URI_DECODED,
      }),
      {
        headers: {
          Authorization: "Basic " + process.env.BASE64_AUTHORIZATION,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  
  console.log(spotifyResponse.data);
})

