export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:8888/callback";
const clientId = "d208be818d2242c89febb3207ba06e89";

const scopes = [ "user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
"playlist-modify-public",
"playlist-modify-private",
"streaming",

];


export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};




/* access_token=BQACor3T41vltLu2b1txfefKcTwupneG405ih8tkw7v2HKgi-BBgBUb3qUHL5Ff-eDsBug2XhFds8TvkJaXAM3qaeJX3JhdQ0v2JS8Vx4qT1m0sTlSwc3xlYmAB9FmhDj6pzi4xva_6S5Zwlx6XE6qAdY1r78qDlSBdxZ8ROUJN_-5V-h-pRyYjKXqXIOURhUcD0Cd8oVcORMCtFPdYjE97JQBdWZYLerJCnlBY_9ygQFEIth7GNw83MNIgFQ-ySGerxVdcvRNQotvzHKg&token_type=Bearer&expires_in=3600
*/



export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;

  // will add/delete more scopes as needed


