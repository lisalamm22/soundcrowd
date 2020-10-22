json.user do 
    json.partial! "user", user: @user
end

json.songs do
    @user.songs.each do |song|
        json.set! song.id do
            json.extract! song, :id, :title, :artist_id, :genre, :description, :created_at
            if song.imageURL.attached?
                json.imageURL url_for(song.imageURL)
            else
                json.imageURL 'http://dalelyles.com/musicmp3s/no_cover.jpg'
            end
        end
    end
end