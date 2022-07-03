class CreateGardens < ActiveRecord::Migration[7.0]
  def change
    create_table :gardens do |t|
      t.string :name
      t.integer :rows
      t.integer :columns
      t.integer :user_id

      t.timestamps
    end
  end
end
