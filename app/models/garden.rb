class Garden < ApplicationRecord
    belongs_to :user
    has_many :garden_squares
    has_many :crops, through: :garden_squares
end
