class CropSerializer < ActiveModel::Serializer
  attributes :id, :name, :family, :plants_per_sq_ft, :days_to_maturity, :watering_needs, :details
end
