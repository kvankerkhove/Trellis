class Crop < ApplicationRecord
    has_many :garden_squares
    has_many :gardens, through: :garden_squares
end
