class CreateDrivers < ActiveRecord::Migration[7.0]
  def change
    create_table :drivers do |t|
      t.string :name
      t.string :nickname
      t.integer :phone

      t.timestamps
    end
  end
end
