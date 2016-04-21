json.array!(@users) do |user|
  json.extract! user, :id, :first_name, :last_name, :avatar_file_name, :email, :company_name, :trade, :rate, :phone_no, :qualifications, :address_one, :lat, :lon, :address_two
  json.url user_url(user, format: :json)
end
