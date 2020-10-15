class Song < ApplicationRecord
    validates :title, :artist_id, :genre, presence: true
    # validate genre with an arr constant

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'
    
    def self.song_by_artist(artist_id)
        songs = Song.select("songs.*").where("artist_id = ?", artist_id)
    end
end
