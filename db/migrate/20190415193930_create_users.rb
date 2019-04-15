class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true
      t.string :avatar
      t.timestamps
    end
  end
end
