json.song do 
    json.partial! '/api/songs/song', song: @song
end

json.comments do 
    @song.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :created_at
        end
    end
end

json.users do
    @song.comments.each do |comment|
        json.set! comment.author_id do 
            json.extract! User.find(comment.author_id), :id, :username
            if User.find(comment.author_id).profile_pic.attached?
                json.photoURL url_for(User.find(comment.author_id).profile_pic)
            else
                json.photoUrl ''
            end
        end
    end
    # @song.likes.each do |like|
    #     json.extract! User.find(like.liker_id), :id, :username
    #         if User.find(like.liker_id).profile_pic.attached?
    #             json.photoURL url_for(User.find(like.liker_id).profile_pic)
    #         else
    #             json.photoUrl ''
    #         end
    #     end
    # end
end

json.likes do 
    @song.likes.each do |like|
        json.set! like.id do
            json.extract! like, :id, :liker_id, :song_id
        end
    end
end