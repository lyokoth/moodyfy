const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const SpotifyWebApi = require("spotify-web-api-node")


const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken
    console.log(refreshToken)
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000/login',
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.client_secret,
        refreshToken,
    })

   spotifyApi.refreshAccessToken()
   .then(
    (data) => {
        res.json({
            accessToken: data.body.accessToken,
            expiresIn: data.body.expiresIn,
        })
    }).catch(err => {
        res.sendStatus(400)
    })
})

app.post("/login", (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'http://localhost:3000/callback',
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.client_secret,
    })


    spotifyApi.authorizationCodeGrant(code).then((data) => {
        res.json({
         accessToken: data.body.access_token,
         refreshToken: data.body.refresh_token,
         expiresIn: data.body.expires_in,
        })

         res.redirect('http://localhost:3000/player'); 
        })
      .catch(() => {
        res.sendStatus(400);
      });
    });

app.listen(3000, () => {
    console.log("Server listening on port 3000");
}); 