# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# == Schema Information
#
# Table name: reservations
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  location     :text
#  trade_name   :text
#  request_time :datetime
#  comments     :text
#  job_status   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null

# create_table "users", force: :cascade do |t|
#   t.string   "first_name"
#   t.string   "last_name"
#   t.string   "email"
#   t.text     "password_digest"
#   t.string   "company_name"
#   t.string   "trade"
#   t.integer  "rate"
#   t.string   "phone_no"
#   t.text     "qualifications"
#   t.string   "address_one"
#   t.string   "address_two"
#   t.datetime "created_at",      null: false
#   t.datetime "updated_at",      null: false
#
# create_table "reviews", force: :cascade do |t|
#   t.integer  "user_id"
#   t.integer  "tradie_id"
#   t.text     "comment"
#   t.integer  "rating"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#
# create_table "reservations", force: :cascade do |t|
#   t.integer  "user_id"
#   t.text     "location"
#   t.text     "trade_name"
#   t.datetime "request_time"
#   t.text     "comments"
#   t.string   "job_status"
#   t.datetime "created_at",   null: false
#   t.datetime "updated_at",   null: false
#
# create_table "quotes", force: :cascade do |t|
#   t.integer  "reservation_id"
#   t.integer  "user_id"
#   t.string   "quote_value"
#   t.datetime "start_time"
#   t.string   "estimated_duration"
#   t.text     "comment"
#   t.datetime "created_at",         null: false
#   t.datetime "updated_at",         null: false
#
# create_table "trades", force: :cascade do |t|
#   t.string   "name"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false

# create_table :users do |t|
#   t.string :first_name
#   t.string :last_name
#   t.string :email
#   t.text :password_digest
#   t.string :company_name
#   t.string :trade
#   t.integer :rate
#   t.string :phone_no
#   t.text :qualifications
#   t.string :address_one
#   t.string :address_two
#   t.float :lat
#   t.float :lon

User.destroy_all()
Pat = User.create(first_name: 'Pat', last_name: "Obireddy", email: "pat@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly", address_two: "Kirribilli", lat: -33.843522, lon: 151.214241)
Marc = User.create(first_name: 'Marc', last_name: "Underwood", email: "marc@gmail.com", password: "chicken", password_confirmation: "chicken",address_one: "12/2 Bradly", address_two: "Kirribilli", lat: -33.843522, lon: 151.214241)
Jae = User.create(first_name: 'Jae', last_name: "Joshi", email: "praz@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly", address_two: "Kirribilli", lat: -33.843522, lon: 151.214241)
Kira = User.create(first_name: 'Kira', last_name: "Correy", email: "kira@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly", address_two: "Kirribilli", lat: -33.843522, lon: 151.214241)




Review.destroy_all()
review1 = Review.create(reviewer_id: 1, reviewee_id: 1, comment: "Sucks", rating: 0)
review2 = Review.create(reviewer_id: 2, reviewee_id: 2, comment: "Not Bad", rating: 3)
review3 = Review.create(reviewer_id: 3, reviewee_id: 3, comment: "Great", rating: 5)

Reservation.destroy_all()
reservation1 = Reservation.create(user_id: 1, location: "Milsons Point", trade_name: "Mechanic", request_time: "1202", comments: "Alright", job_status: "Pending")
reservation2 = Reservation.create(user_id: 2, location: "Gordon", trade_name: "Carpenter", request_time: "1100", comments: "Crappy", job_status: "Completed")
reservation3 = Reservation.create(user_id: 3, location: "Strathfield", trade_name: "Grave Digger", request_time: "0800", comments: "Not Bad", job_status: "Pending")

Quote.destroy_all()
quote1 = Quote.create(reservation_id: 1, user_id: 1, quote_value: "$3.00", start_time: "1100", estimated_duration: "3 Hours", comment: "Aight")
quote2 = Quote.create(reservation_id: 2, user_id: 2, quote_value: "$30000.00", start_time: "1300", estimated_duration: "5 Hours", comment: "Not Bad")
quote3 = Quote.create(reservation_id: 3, user_id: 3, quote_value: "$200.00", start_time: "0400", estimated_duration: "10 Hours", comment: "Not Good")

Trade.destroy_all()
trade1 = Trade.create(name: "Mechanic")
trade2 = Trade.create(name: "Carpenter")
trade3 = Trade.create(name: "Lock Smith")
