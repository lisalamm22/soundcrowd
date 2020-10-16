json.extract! song, :id, :title, :artist_id, :genre, :description
if song.audioURL.attached?
    json.audioURL url_for(song.audioURL)
else
    json.audioURL ''
end
if song.imageURL.attached?
    json.imageURL url_for(song.imageURL)
else
    json.imageURL ''
end
