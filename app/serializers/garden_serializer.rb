class GardenSerializer < ActiveModel::Serializer
  attributes :id, :name, :rows, :columns, :user_id
  has_many :garden_squares
end
