import React from 'react'
import styled from 'styled-components';
import {useDispatch, useSelector } from 'react-redux';
import TracksGrid from '../Tracks/TracksGrid';
import Playlist from './Playlist';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
const TracksWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    max-width: 900px;
    margin: 1rem;
`;

const ButtonsRow = styled.div`
    display: flex;
    align-items: space-between;
`;


export default () => {
    const dispatch = useDispatch();
    const tracks = useSelector((state) => state.tracks);

  return (
    <Wrapper>
        <div className="title">Here is your playlist!</div> 
        <TracksWrapper>
        <TracksGrid tracks={tracks.slice(0, 12)} />
        </TracksWrapper>
<ButtonsRow>
    <Playlist tracks={tracks} />
</ButtonsRow>
        </Wrapper>
        
  )
  
}


