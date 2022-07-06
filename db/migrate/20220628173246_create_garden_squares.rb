class CreateGardenSquares < ActiveRecord::Migration[7.0]
  def change
    create_table :garden_squares do |t|
      t.integer :square_number
      t.string :start_date
      t.integer :garden_id
      t.integer :crop_id, null: true

      t.timestamps
    end
  end
end
