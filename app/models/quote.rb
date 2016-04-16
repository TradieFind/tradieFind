# == Schema Information
#
# Table name: quotes
#
#  id                 :integer          not null, primary key
#  reservation_id     :integer
#  user_id            :integer
#  quote_value        :string
#  start_time         :datetime
#  estimated_duration :string
#  comment            :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Quote < ActiveRecord::Base
  belongs_to :user
end
