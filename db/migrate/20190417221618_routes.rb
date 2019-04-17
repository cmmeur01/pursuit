class Routes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false
      t.text :description
      t.text :route, null: false
      t.float :distance, null: false
      t.float :elevation, null: false
      t.timestamps
    end
  end
end
