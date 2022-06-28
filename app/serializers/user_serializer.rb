class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :plant_hardiness_zone, :username, :password
end
