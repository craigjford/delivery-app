class CreateCustomers < ActiveRecord::Migration[7.0]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :phone
      t.string :hanger
      t.string :starch

      t.timestamps
    end
  end
end
