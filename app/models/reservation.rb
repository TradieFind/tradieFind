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
#

class Reservation < ActiveRecord::Base
end
