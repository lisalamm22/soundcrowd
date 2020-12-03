class Song < ApplicationRecord
    validates :title, :artist_id, :genre, presence: true
    # validate genre with an arr constant

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: 'Comment'

    has_many :likes,
        primary_key: :id,
        foreign_key: :song_id,
        class_name: 'Like'

    has_one_attached :audioURL
    has_one_attached :imageURL

    # def ensure_audio
    #     unless self.audioURL.attached?
    #         errors[:audioURL] << "must be attached"
    #     end
    # end
    
    def self.song_by_artist(artist_id)
        # songs = Song.select("songs.*").where("artist_id = ?", artist_id)
        songs = Song.find_by(artist_id: artist_id)
    end
end
