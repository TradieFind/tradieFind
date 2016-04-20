class AddQuoteIdToReservations < ActiveRecord::Migration
  def change
    add_column :reservations, :quote_id, :integer
  end
end
