class Like < ApplicationRecord

    validates :song_id, uniqueness: {scope: :liker_id}

    belongs_to :song,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: 'Song'

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: 'User'

    # def self.find_by_like(songId, likerId)
    #     user = Song.find_by(email: email)
    #     return nil unless user
    #     user.is_password?(password) ? user : nil
    # end
end
