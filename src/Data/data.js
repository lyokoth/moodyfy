// User Profile
export class UserProfile {
    constructor(name, profile_img, spotify_profile_link, num_of_followers) {
      this.name = name;
      this.profile_img = profile_img;
      this.spotify_profile_link = spotify_profile_link;
      this.num_of_followers = num_of_followers;
    }
  }
  
  // Top Artists
  export class TopArtist {
    constructor(artist_name, artist_profile_pic, artist_id, spotify_artist_link) {
      this.artist_name = artist_name;
      this.artist_profile_pic = artist_profile_pic;
      this.artist_id = artist_id;
      this.spotify_artist_link = spotify_artist_link;
    }
  }
  
  // Top Tracks
  export class TopTrack {
    constructor(track_name, artist_name, track_cover_art, track_id, spotify_track_link) {
      this.track_name = track_name;
      this.artist_name = artist_name;
      this.track_cover_art = track_cover_art;
      this.track_id = track_id;
      this.spotify_track_link = spotify_track_link;
    }
  }
  
  // Recently Played Tracks
  export class RecentlyPlayed {
    constructor(track_name, artist_name, track_cover_art, played_at, spotify_track_link) {
      this.track_name = track_name;
      this.artist_name = artist_name;
      this.track_cover_art = track_cover_art;
      this.played_at = played_at;
      this.spotify_track_link = spotify_track_link;
    }
  }
  
  // Recommended Tracks
  export class RecommendedTrack {
    constructor(track_art_cover, track_name, artist_name, spotify_preview_url, spotify_track_link) {
      this.track_art_cover = track_art_cover;
      this.track_name = track_name;
      this.artist_name = artist_name;
      this.spotify_preview_url = spotify_preview_url;
      this.spotify_track_link = spotify_track_link;
    }
  }
  
  // Recommended Artists
  export class RecommendedArtist {
    constructor(artist_name, artist_profile_pic, artist_spotify_link) {
      this.artist_name = artist_name;
      this.artist_profile_pic = artist_profile_pic;
      this.artist_spotify_link = artist_spotify_link;
    }
  }
  
  // User Data
  export class UserData {
    constructor(userProfile) {
      this.userProfile = userProfile;
    }
  }
  
  // Top Track Pagination
  export class TopTrackPagination {
    constructor(pages) {
      this.pages = pages;
    }
  }
  
  // Top Artists Pagination
  export class TopArtistPagination {
    constructor(pages) {
      this.pages = pages;
    }
  }
  
  // Recently Played Pagination
  export class RecentlyPlayedPagination {
    constructor(pages) {
      this.pages = pages;
    }
  }
  