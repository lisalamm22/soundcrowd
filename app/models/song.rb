class Song < ApplicationRecord
    validates :title, :artist_id, :genre, presence: true
    # validate genre with an arr constant

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'
    
    def self.songs_by_artist(:artist)
        songs = Song.all.includes(:artist)
    end
end
