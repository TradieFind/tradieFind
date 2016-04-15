json.array!(@reservations) do |reservation|
  json.extract! reservation, :id, :user_id, :location, :trade_name, :request_time, :comments, :job_status
  json.url reservation_url(reservation, format: :json)
end
