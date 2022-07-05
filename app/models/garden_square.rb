class GardenSquare < ApplicationRecord
    belongs_to :garden
    belongs_to :crop

    def self.sort_by_garden garden_id
        GardenSquare.all.where("garden_id = #{garden_id}").order(:square_number)
    end

    def self.sort_and_remove_fallow_squares garden_id
        GardenSquare.sort_by_garden(garden_id).where.not("crop_id = '1'")
    end


end
