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
Iwan =    User.create(first_name: 'Iwan',     last_name: "Sawa",      email: "iwan@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",        trade: "Mechanic",      address_two: "Kirribilli",  lat: -33.842139,  lon: 151.214534,  company_name: "Bulkwaste" )
Anthony = User.create(first_name: 'Anthony',  last_name: "Germana",   email: "anthony@gmail.com", password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",        trade: "Mechanic",      address_two: "Kirribilli",  lat: -33.841896,  lon: 151.228447,  company_name: "Dodge Bros")
Pat =     User.create(first_name: 'Pat',      last_name: "Obireddy",  email: "pat@gmail.com",     password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",        trade: "customer",      address_two: "Kirribilli",  lat: -33.839046,  lon: 151.203734,  company_name: "")
Marc =    User.create(first_name: 'Marc',     last_name: "Underwood", email: "marc@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "580 George street",  trade: "customer",      address_two: "Sydney",      lat: -33.868647,  lon: 151.207008,  company_name: "")
Jae =     User.create(first_name: 'Jae',      last_name: "Joshi",     email: "praz@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",        trade: "Carpenter",     address_two: "Kirribilli",  lat: -33.787418,  lon: 151.126622,  company_name: "Tow for Cash")
Kira =    User.create(first_name: 'Kira',     last_name: "Correy",    email: "kira@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly",        trade: "customer",      address_two: "Kirribilli",  lat: -33.824748,  lon: 151.240248,  company_name: "")
Tamara =  User.create(first_name: 'Tamara',   last_name: "Correy",    email: "tamara@gmail.com",  password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Locksmith",     address_two: "Perth",       lat: -31.9535,    lon: 115.8570,    company_name: "Door Breaker")
Karen =   User.create(first_name: 'Karen',    last_name: "Correy",    email: "karen@gmail.com",   password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Carpenter",     address_two: "Sydney",      lat: -33.862525,  lon: 151.070357,  company_name: "Karen & Co.")
Trevor =  User.create(first_name: 'Trevor',   last_name: "Correy",    email: "trevor@gmail.com",  password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Carpenter",     address_two: "Sydney",      lat: -33.862483,  lon: 151.207149,  company_name: "Trevor & Co.")
Dave =    User.create(first_name: 'Dave',     last_name: "Smith",     email: "dave@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Mechanic",      address_two: "Sydney",      lat: -33.87,      lon: 151.206,     company_name: "Dave & Co.")
Chris =   User.create(first_name: 'Chris',    last_name: "Cooper",    email: "chris@gmail.com",   password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Locksmith",     address_two: "Sydney",      lat: -33.790538,  lon: 151.282919,  company_name: "Chris & Co.")
Bill =    User.create(first_name: 'Bill',     last_name: "Cruick",    email: "bill@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "customer",      address_two: "Sydney",      lat: -33.790788,  lon: 151.284442,  company_name: "")
Dale =    User.create(first_name: 'Dale',     last_name: "Someguy",   email: "dale@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "Carpenter",     address_two: "Sydney",      lat: -33.768521,  lon: 151.271023,  company_name: "Dale & Co.")
Daniel =  User.create(first_name: 'Daniel',   last_name: "Someguy",   email: "daniel@gmail.com",  password: "chicken", password_confirmation: "chicken", address_one: "12/2 Bradly Ave",    trade: "customer",      address_two: "Sydney",      lat: -33.790135,  lon: 151.278855,  company_name: "")
Pogo =    User.create(first_name: 'Pogo',     last_name: "thedog",    email: "pogo@gmail.com",    password: "chicken", password_confirmation: "chicken", address_one: "1 emu street",       trade: "customer",      address_two: "Perth",       lat: -31.9635,    lon: 115.9570,    company_name: "")
Death =   User.create(first_name: 'Death',    last_name: "Black",     email: "death@gmail.com",   password: "chicken", password_confirmation: "chicken", address_one: "13 hades hollow",    trade: "Grave Digger",  address_two: "Perth",       lat: -31.9666,    lon: 115.9666,    company_name: "Underworld")

Review.destroy_all()
review1 = Review.create(reviewer_id: 1, reviewee_id: 1, comment: "Sucks", rating: 0)
review2 = Review.create(reviewer_id: 2, reviewee_id: 2, comment: "Not Bad", rating: 3)
review4 = Review.create(reviewer_id: 3, reviewee_id: 3, comment: "Great", rating: 5)
review5 = Review.create(reviewer_id: 4, reviewee_id: 4, comment: "Great", rating: 2)
review6 = Review.create(reviewer_id: 5, reviewee_id: 5, comment: "Super", rating: 3)
review7 = Review.create(reviewer_id: 6, reviewee_id: 6, comment: "Dingo", rating: 1)
review8 = Review.create(reviewer_id: 7, reviewee_id: 7, comment: "Yawn", rating: 4)
review9 = Review.create(reviewer_id: 8, reviewee_id: 8, comment: "Muppet", rating: 0)


Reservation.destroy_all()
reservation1 = Reservation.create(user_id: 3,   location: "Milsons Point",  trade_name: "Mechanic", request_time: "1202", comments: "Fix engine", job_status: "Pending")
reservation2 = Reservation.create(user_id: 3,   location: "Gordon",         trade_name: "Carpenter", request_time: "1100", comments: "Leaky roof", job_status: "pending")
reservation3 = Reservation.create(user_id: 3,   location: "Strathfield",    trade_name: "Grave Digger", request_time: "0800", comments: "Bury wife", job_status: "pending")

reservation4 = Reservation.create(user_id: 4,   location: "Manly",          trade_name: "Locksmith", request_time: "1202", comments: "join me for a beer i'm lonely and sad", job_status: "pending")
reservation5 = Reservation.create(user_id: 4,   location: "Milsons Point",  trade_name: "Carpenter", request_time: "1202", comments: "Sesh brah", job_status: "pending")
reservation6 = Reservation.create(user_id: 4,   location: "Bondi",          trade_name: "Mechanic", request_time: "1202", comments: "Burger Time", job_status: "pending")
reservation7 = Reservation.create(user_id: 4,   location: "Newtown",        trade_name: "Mechanic", request_time: "1500", comments: "Newy Hotel", job_status: "pending")

reservation8 = Reservation.create(user_id: 6,   location: "Penrith",        trade_name: "Mechanic", request_time: "1202", comments: "Fix lights", job_status: "pending")
reservation9 = Reservation.create(user_id: 6,   location: "Glenbrook",      trade_name: "Carpenter", request_time: "1202", comments: "cut some wood", job_status: "pending")
reservation10 = Reservation.create(user_id: 6,  location: "Milsons Point",  trade_name: "Grave Digger", request_time: "1202", comments: "Dig a hole", job_status: "pending")

reservation11 = Reservation.create(user_id: 12, location: "Lavender Bay",   trade_name: "Grave Digger", request_time: "2200", comments: "Fix hole", job_status: "pending")
reservation12 = Reservation.create(user_id: 12, location: "Hornsby",        trade_name: "Locksmith", request_time: "1202", comments: "Open door", job_status: "pending")
reservation13 = Reservation.create(user_id: 12, location: "Hornsby",        trade_name: "Mechanic", request_time: "1202", comments: "Close door", job_status: "pending")

reservation14 = Reservation.create(user_id: 14, location: "Lane Cove",      trade_name: "Carpenter", request_time: "1202", comments: "Cut some more wood", job_status: "pending")
reservation15 = Reservation.create(user_id: 14, location: "Hornsby",        trade_name: "Locksmith", request_time: "1202", comments: "Make a chair", job_status: "pending")
reservation16 = Reservation.create(user_id: 14, location: "Hornsby",        trade_name: "Mechanic", request_time: "1202", comments: "Make a chair", job_status: "pending")

reservation17 = Reservation.create(user_id: 15, location: "Hornsby",        trade_name: "Carpenter", request_time: "1202", comments: "Make a chair", job_status: "pending")
reservation18 = Reservation.create(user_id: 15, location: "Hornsby",        trade_name: "Locksmith", request_time: "1202", comments: "Make a chair", job_status: "pending")
reservation19 = Reservation.create(user_id: 15, location: "Hornsby",        trade_name: "Mechanic", request_time: "1202", comments: "Make a chair", job_status: "pending")
reservation20 = Reservation.create(user_id: 15, location: "Hornsby",        trade_name: "Carpenter", request_time: "1202", comments: "Make a chair", job_status: "booked", quote_id: 16)

Quote.destroy_all()
quote1  = Quote.create(reservation_id: 1,  user_id: 1,   status: 'pending',  quote_value: "$3.00", start_time: "1100", estimated_duration: "3 Hours", comment: "I fix quic")
quote2  = Quote.create(reservation_id: 2,  user_id: 2,   status: 'pending', quote_value: "$30000.00", start_time: "1300", estimated_duration: "5 Hours", comment: "Mucho gusto fixo")
quote3  = Quote.create(reservation_id: 3,  user_id: 10,  status: 'pending',  quote_value: "$200.00", start_time: "0400", estimated_duration: "10 Hours", comment: "need parts from japan")


quote4  = Quote.create(reservation_id: 4,  user_id: 16,  status: 'pending', quote_value: "$666.00", start_time: "0001", estimated_duration: "enterity", comment: "See you soon :D")

quote5  = Quote.create(reservation_id: 5,  user_id: 7,   status: 'pending',  quote_value: "$500.00", start_time:  "0400", estimated_duration: "2.5 Hours", comment: "I will come back and steal")
quote6  = Quote.create(reservation_id: 6,  user_id: 11,  status: 'pending',  quote_value: "$2300.00", start_time: "0700", estimated_duration: "10.5 Hours", comment: "Can i use a chainsaw?")


quote7  = Quote.create(reservation_id: 7,  user_id: 1,   status: 'pending',  quote_value: "$800.00",    start_time: "0100", estimated_duration: "9 Hours", comment: "hello")
quote8  = Quote.create(reservation_id: 7,  user_id: 2,   status: 'pending',  quote_value: "$200000.00", start_time: "0400", estimated_duration: "120 Hours", comment: "hurro")
quote9  = Quote.create(reservation_id: 8,  user_id: 10,  status: 'pending',  quote_value: "$400.00",    start_time: "0700", estimated_duration: "17 Hours", comment: "wuhwoo!")


quote10 = Quote.create(reservation_id: 9, user_id:  5, status: 'pending',  quote_value: "$100.00", start_time: "0400", estimated_duration: "10 Hours", comment: "wood good")
quote11 = Quote.create(reservation_id: 10, user_id:  8, status: 'pending',  quote_value: "$300.00", start_time: "0300", estimated_duration: "10 Hours", comment: "me nail it 4 u")
quote12 = Quote.create(reservation_id: 11, user_id:  9, status: 'pending',  quote_value: "$20.00", start_time: "0500", estimated_duration: "11 Hours", comment: "saw it done once will hammer it ")
quote13 = Quote.create(reservation_id: 12, user_id: 13, status: 'pending',  quote_value: "$2009.00", start_time: "0600", estimated_duration: "12 Hours", comment: "must supply hammer")

quote14 = Quote.create(reservation_id: 13, user_id:  1, status: 'pending',  quote_value: "$2600.00", start_time: "0700", estimated_duration: "15 Hours", comment: "vroom?")
quote15 = Quote.create(reservation_id: 19, user_id:  2, status: 'rejected',  quote_value: "$20054.00", start_time: "0800", estimated_duration: "16 Hours", comment: "zoom zoom to ya soon")
quote16 = Quote.create(reservation_id: 20, user_id:  5, status: 'accepted',  quote_value: "$20054.00", start_time: "0800", estimated_duration: "16 Hours", comment: "saw dust")

Trade.destroy_all()
trade1 = Trade.create(name: "Mechanic")
trade2 = Trade.create(name: "Carpenter")
trade3 = Trade.create(name: "Locksmith")
trade4 = Trade.create(name: "Grave Digger")
