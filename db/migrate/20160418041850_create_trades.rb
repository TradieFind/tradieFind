class CreateTrades < ActiveRecord::Migration
  def change
    create_table :trades do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
