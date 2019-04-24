class Route < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :sport, :distance, :elevation, :user_id, presence: true

  belongs_to :user

  has_many :workouts

end