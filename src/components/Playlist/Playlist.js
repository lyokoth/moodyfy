import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import  set_playlist_id  from '../../utils/reducer';

import { Link }  from 'react-router-dom';
import  Login  from '../Login/Login';


export default function Playlist({ tracks }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  let playlistId = useSelector((state) => state.playlistId);

const getHeaders = (token) => ({
  Authorization: 'Bearer ' + token,
  'Content-Type': 'application/json',
});

const populatePlaylist = async (playlistId, tracks, token) => {
  const populatePlaylistUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  await fetch(populatePlaylistUrl, {
    method: 'PUT',
    headers: getHeaders(token),
    body: JSON.stringify({
      uris: tracks.map((track) => track.uri),
    }),
  });
  //TODO handle error
};

const createPlaylist = async (accessToken, userId) => {
  const url = `https://api.spotify.com/v1/users/${userId}/playlists?`;
  const res = await fetch(url, {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify({
      name: 'My Moodify Playlist',
      description: "Playlist created in Moodify",
      public: true
    }),
  }).then((res) => res.json());
  //TODO handle error
  return res.id;
};

  const openPlaylist = useCallback(async () => {
    if (!token) {
      window.localStorage.setItem('tracks', JSON.stringify(tracks));
      <Login />
      return;
    }
    const getUserId = async () => {
      const res = await fetch('https://api.spotify.com/v1/me', {
        headers: getHeaders(token),
      }).then((res) => res.json());
      //TODO: handle error
      return res.id;
    };
    const userId = await getUserId();
    if (!playlistId) {
      playlistId = await createPlaylist(token, userId);
      dispatch(set_playlist_id(playlistId));
    }
    await populatePlaylist(playlistId, tracks, token);
    const playlistUrl = `https://open.spotify.com/playlist/${playlistId}`;
    window.open(playlistUrl);
  }, [tracks, token, playlistId, dispatch]);

  useEffect(() => {
    if (window.localStorage.getItem('tracks')) {
      window.localStorage.removeItem('tracks');
      openPlaylist();
    }
  }, [openPlaylist]);

    return (
      <div>
      <h1 className='title'>Your Playlist has been Created!</h1>

      <Link to ={"/webplayer"} className="moody-btn">
        Play on Moodify
      </Link>

      <a href="https://open.spotify.com/" className="moody-btn" target="_blank" rel="noopener noreferrer">
        Play on Spotify
      </a>
      </div>
    );
}
