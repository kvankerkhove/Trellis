class Crop < ApplicationRecord
    has_many :garden_squares
    has_many :gardens, through: :garden_squares

    def self.alphabetized
        Crop.all.order(:name)
    end
end
