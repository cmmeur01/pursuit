class ChangeRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :sport, :string, null: false
  end
end
