import { createSlice } from "@reduxjs/toolkit";

const setStoreVariable = (key) => (state, action) => {
  state[key] = action.payload;
};

const mainSlice = createSlice({
  name: 'main',
  initialState: {
    token: null,
    userInfo: null,
    playlists: [],
    currentPlaying: null,
    playerState: false,
    selectedPlaylist: null,
    selectedPlaylistId: "37i9dQZF1DXcBWIGoYBM5M",
    selectedGenres: [], // Move selectedGenres inside initialState
    playlistId: null, // Move playlistId inside initialState
  },
  reducers: {
    setTracks: setStoreVariable('tracks'),
    setAccessToken: setStoreVariable('accessToken'),
    setLoading: setStoreVariable('loading'),
    setAudioProperties: setStoreVariable('audioProperties'),
    setSelectedGenres: setStoreVariable('selectedGenres'),
    setPlaylistId: setStoreVariable('playlistId'),
  },
});

export const { setTracks, setAccessToken, setLoading, setAudioProperties, setSelectedGenres, setPlaylistId } = mainSlice.actions;

export default mainSlice.reducer; // Export the reducer as default
