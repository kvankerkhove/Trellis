class CreateCrops < ActiveRecord::Migration[7.0]
  def change
    create_table :crops do |t|
      t.string :name
      t.string :family
      t.integer :plants_per_sq_ft
      t.integer :days_to_maturity
      t.float :projected_yield
      t.string :yield_unit
      t.string :watering_needs
      t.string :details
      t.string :image
      t.string :url

      t.timestamps
    end
  end
end
