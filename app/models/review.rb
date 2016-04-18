# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  reviewer_id :integer
#  reviewee_id :integer
#  comment     :text
#  rating      :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ActiveRecord::Base
  has_one :reviewer, :class_name => 'User', :foreign_key => 'reviewer_id'
  has_one :reviewee, :class_name => 'User', :foreign_key => 'reviewee_id'
end
