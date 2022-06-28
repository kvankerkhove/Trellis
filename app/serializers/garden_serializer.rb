class GardenSerializer < ActiveModel::Serializer
  attributes :id, :rows, :columns, :user_id
end
