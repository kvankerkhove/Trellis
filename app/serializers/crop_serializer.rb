class CropSerializer < ActiveModel::Serializer
  attributes :id, :name, :family, :plants_per_sq_ft, :days_to_maturity, :projected_yield, :yield_unit, :watering_needs, :details, :image
end
