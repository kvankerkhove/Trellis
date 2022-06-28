class GardenSquareSerializer < ActiveModel::Serializer
  attributes :id, :square_number
  belongs_to :garden
  belongs_to :crop
end
