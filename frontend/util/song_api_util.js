export const fetchSongs = () => {
    return $.ajax({
        method: `GET`,
        url: `/api/songs`,
        // data: { artist }
    });
};

export const fetchSong = (songId) => {
    return $.ajax({
        method: `GET`,
        url: `/api/songs/${songId}`,
    });
};

export const createSong = (song) => {
    return $.ajax({
        method: `POST`,
        url: `/api/songs`,
        data: song,
        contentType: false,
        processData: false
    })
};

export const updateSong = (song) => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/songs/${song.id}`,
        data: { song },
    })
};

export const deleteSong = (songId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/songs/${songId}`,
    });
};