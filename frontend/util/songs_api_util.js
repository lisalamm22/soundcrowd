export const upload = (song) => {
    return $.ajax({
        method: `POST`,
        url: `/api/songs`,
        data: { song },
    });
};

export const show = (songId) => {
    return $.ajax({
        method: `GET`,
        url: `/api/songs/${songId}`,
    });
}

export const remove = (songId) => {
    return $.ajax({
        method: `DELETE`,
        url: `/api/songs/${songId}`,
    });
};

export const update = (songId) => {
    return $.ajax({
        method: `PATCH`,
        url: `/api/songs/${songId}`,
        data: { song },
    });
}