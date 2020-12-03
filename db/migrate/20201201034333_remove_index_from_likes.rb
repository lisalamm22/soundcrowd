class RemoveIndexFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, column: [:song_id, :liker_id]
  end
end
