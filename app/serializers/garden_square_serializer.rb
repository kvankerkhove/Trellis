class GardenSquareSerializer < ActiveModel::Serializer
  attributes :id, :square_number, :garden_id, :crop_id
  belongs_to :crop
end
