class AddIndexToLikes < ActiveRecord::Migration[5.2]
  def change
    add_index :likes, [:song_id,:liker_id], unique: true
  end
end
