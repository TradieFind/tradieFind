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
Iwan = User.create(first_name: 'Iwan', last_name: "Sawa", email: "iwan@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly", trade: "Mechanic", address_two: "Kirribilli", lat: -33.842139, lon: 151.214534, company_name: "Bulkwaste" )
Anthony = User.create(first_name: 'Anthony', last_name: "Germana", email: "anthony@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly", trade: "Mechanic", address_two: "Kirribilli", lat: -33.841896, lon: 151.228447, company_name: "Dodge Bros")
Pat = User.create(first_name: 'Pat', last_name: "Obireddy", email: "pat@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",trade: "customer", address_two: "Kirribilli", lat: -33.839046, lon: 151.203734, company_name: "FixQuick")
Marc = User.create(first_name: 'Marc', last_name: "Underwood", email: "marc@gmail.com", password: "chicken", password_confirmation: "chicken",address_one: "580 George street",trade: "customer", address_two: "Sydney", lat: -33.868647, lon: 151.207008, company_name: "none")
Jae = User.create(first_name: 'Jae', last_name: "Joshi", email: "praz@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",trade: "Carpenter", address_two: "Kirribilli", lat: -33.787418, lon: 151.126622, company_name: "Tow for Cash")
Kira = User.create(first_name: 'Kira', last_name: "Correy", email: "kira@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",trade: "customer", address_two: "Kirribilli", lat: -33.824748, lon: 151.240248, company_name: "ZippyFix")
Tamara = User.create(first_name: 'Tamara', last_name: "Correy", email: "tamara@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Locksmith", address_two: "Perth", lat: -31.9535, lon: 115.8570, company_name: "Door Breaker")
Karen = User.create(first_name: 'Karen', last_name: "Correy", email: "karen@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Carpenter", address_two: "Sydney", lat: -33.862525, lon: 151.070357, company_name: "Karen & Co.")
Trevor = User.create(first_name: 'Trevor', last_name: "Correy", email: "trevor@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Carpenter", address_two: "Sydney", lat: -33.862483, lon: 151.207149, company_name: "Trevor & Co.")
Dave = User.create(first_name: 'Dave', last_name: "Smith", email: "dave@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Mechanic", address_two: "Sydney", lat: -33.87, lon: 151.206, company_name: "Dave & Co.")
Chris = User.create(first_name: 'Chris', last_name: "Cooper", email: "chris@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Locksmith", address_two: "Sydney", lat: -33.790538, lon: 151.282919, company_name: "Chris & Co.")
Bill = User.create(first_name: 'Bill', last_name: "Cruickshank", email: "bill@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "customer", address_two: "Sydney", lat: -33.790788, lon: 151.284442, company_name: "Bill & Co.")
Dale = User.create(first_name: 'Dale', last_name: "Someguy", email: "dale@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "Carpenter", address_two: "Sydney", lat: -33.768521, lon: 151.271023, company_name: "Dale & Co.")
Daniel = User.create(first_name: 'Daniel', last_name: "Someguy", email: "daniel@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",trade: "customer", address_two: "Sydney", lat: -33.790135, lon: 151.278855, company_name: "Daniel & Co.")
Pogo = User.create(first_name: 'Pogo', last_name: "thedog", email: "pogo@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "1 emu street",trade: "customer", address_two: "Perth", lat: -31.9635, lon: 115.9570, company_name: "yada")










Review.destroy_all()
review1 = Review.create(reviewer_id: 1, reviewee_id: 1, comment: "Sucks", rating: 0)
review2 = Review.create(reviewer_id: 2, reviewee_id: 2, comment: "Not Bad", rating: 3)
review4 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Great", rating: 5)
review5 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Great", rating: 2)
review6 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Super", rating: 3)
review7 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Dingo", rating: 1)
review8 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Yawn", rating: 4)
review9 = Review.create(reviewer_id: 3, reviewee_id: 2, comment: "Muppet", rating: 0)





Reservation.destroy_all()
reservation1 = Reservation.create(user_id: 1, location: "Milsons Point", trade_name: "Mechanic", request_time: "1202", comments: "Fix engine", job_status: "Pending")
reservation2 = Reservation.create(user_id: 2, location: "Gordon", trade_name: "Carpenter", request_time: "1100", comments: "Leaky roof", job_status: "Completed")
reservation3 = Reservation.create(user_id: 3, location: "Strathfield", trade_name: "Grave Digger", request_time: "0800", comments: "Bury wife", job_status: "Pending")

Quote.destroy_all()
quote1 = Quote.create(reservation_id: 1, user_id: 1, quote_value: "$3.00", start_time: "1100", estimated_duration: "3 Hours", comment: "Aight")
quote2 = Quote.create(reservation_id: 2, user_id: 2, quote_value: "$30000.00", start_time: "1300", estimated_duration: "5 Hours", comment: "Not Bad")
quote3 = Quote.create(reservation_id: 3, user_id: 3, quote_value: "$200.00", start_time: "0400", estimated_duration: "10 Hours", comment: "Not Good")

Trade.destroy_all()
trade1 = Trade.create(name: "Mechanic")
trade2 = Trade.create(name: "Carpenter")
trade3 = Trade.create(name: "Locksmith")
