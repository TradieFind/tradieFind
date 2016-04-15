class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.text :location
      t.text :trade_name
      t.datetime :request_time
      t.text :comments
      t.string :job_status

      t.timestamps null: false
    end
  end
end
