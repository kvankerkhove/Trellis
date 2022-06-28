class CreateCrops < ActiveRecord::Migration[7.0]
  def change
    create_table :crops do |t|
      t.string :name
      t.string :family
      t.integer :plants_per_sq_ft
      t.integer :days_to_maturity
      t.string :watering_needs
      t.string :details

      t.timestamps
    end
  end
end
