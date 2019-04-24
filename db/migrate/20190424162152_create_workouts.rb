class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null: false, index: true
      t.integer :route_id, null: false, index: true
      t.string :title, null: false
      t.string :description
      t.string :sport, null: false
      t.float :duration, null: false
      t.date :date, null: false
      t.timestamps
    end
  end
end
