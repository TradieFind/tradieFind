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

reservationData = [
  {
    "id": 1,
    "user_id": 1,
    "location": "Bondi",
    "trade_name": "Mechanic",
    "request_time ": "12:02PM",
    "comments": "Great work",
    "job_status": "complete",
  },
  {
    "id": 2,
    "user_id": 2,
    "location": "Manly",
    "trade_name": "Grave Digger",
    "request_time ": "8:00PM",
    "comments": "",
    "job_status": "pending",
  },
  {
    "id": 3,
    "user_id": 3,
    "location": "Chatswood",
    "trade_name": "Carpenter",
    "request_time ": "12:00PM",
    "comments": "",
    "job_status": "pending",
  }
]
