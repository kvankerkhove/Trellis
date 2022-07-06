class GardenSquareSerializer < ActiveModel::Serializer
  attributes :id, :square_number, :garden_id, :crop_id, :updated_at
  belongs_to :crop

end
