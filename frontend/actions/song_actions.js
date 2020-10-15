import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_ALL_SONGS = 'RECEIVE_ALL_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';

const receiveAllSongs = (songs) => {
    return ({
        type: RECEIVE_ALL_SONGS,
        songs,
    });
};

const receiveSong = (song) => {
    return ({
        type: RECEIVE_SONG,
        song,
    });
};

const removeSong = (songId) => {
    return ({
        type: REMOVE_SONG,
        songId,
    });
};

export const fetchSongs = () => (dispatch) => {
    return (
        SongApiUtil.fetchSongs()
            .then(songs => { dispatch(receiveAllSongs(songs)) })
    );
};

export const fetchSong = (songId) => (dispatch) => {
    return (
        SongApiUtil.fetchSong(songId)
            .then(song => { dispatch(receiveSong(song)) })
    );
};

export const createSong = (song) => (dispatch) => {
    return (
        SongApiUtil.createSong(song)
            .then(song => { dispatch(receiveSong(song)) })
    );
};

export const updateSong = (song) => (dispatch) => {
    return (
        SongApiUtil.updateSong(song)
            .then(song => { dispatch(receiveSong(song)) })
    );
};

export const deleteSong = (songId) => (dispatch) => {
    return (
        SongApiUtil.deleteSong(songId)
            .then(() => { dispatch(removeSong(songId)) })
    );
};