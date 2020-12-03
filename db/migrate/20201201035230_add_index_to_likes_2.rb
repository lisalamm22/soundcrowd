class AddIndexToLikes2 < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, :song_id
    remove_index :likes, :liker_id
    add_index :likes, [:song_id,:liker_id], unique: true
  end
end
