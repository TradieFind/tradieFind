# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  first_name      :string
#  last_name       :string
#  email           :string
#  password_digest :text
#  company_name    :string
#  trade           :string
#  rate            :integer
#  phone_no        :string
#  qualifications  :text
#  address_one     :string
#  address_two     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  has_secure_password
  validates :email, :presence => true, :uniqueness => true
end
