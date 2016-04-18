class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.text :password_digest
      t.string :company_name
      t.string :trade
      t.integer :rate
      t.string :phone_no
      t.text :qualifications
      t.string :address_one
      t.string :address_two
      t.float :lat
      t.float :lon

      t.timestamps null: false
    end
  end
end
