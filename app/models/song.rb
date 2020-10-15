class Song < ApplicationRecord
    validates :title, :artist_id, :genre, presence: true
    
    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: 'User'
    
end
