class CreateQuotes < ActiveRecord::Migration
  def change
    create_table :quotes do |t|
      t.integer :reservation_id
      t.integer :user_id
      t.string :quote_value
      t.datetime :start_time
      t.string :estimated_duration
      t.text :comment

      t.timestamps null: false
    end
  end
end
