json.extract! song, :id, :title, :artist_id, :genre, :description, :created_at
json.set! 'artist' do 
    json.partial! "/api/users/user", user: song.artist
end
json.set! 'likes' do 
    song.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :liker_id, :song_id
        end
    end
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