json.extract! song, :id, :title, :artist_id, :genre, :description
json.set! 'artist' do 
    json.partial! "/api/users/user", user: song.artist
end

if song.audioURL.attached?
    json.audioURL url_for(song.audioURL)
else
    json.audioURL ''
end
if song.imageURL.attached?
    json.imageURL url_for(song.imageURL)
else
    json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'
end


# json.set! song.artist.id do 
#     json.extract! song.artist, :id, :name
# end