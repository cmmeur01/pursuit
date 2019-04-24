class Workout < ApplicationRecord

  validates :title, presence: true, uniqueness: true
  validates :sport, :duration, :route_id, :user_id, :date, presence: true

  belongs_to :user

  belongs_to :route

end