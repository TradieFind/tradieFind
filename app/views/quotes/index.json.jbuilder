json.array!(@quotes) do |quote|
  json.extract! quote, :id, :reservation_id, :user_id, :quote_value, :start_time, :estimated_duration, :comment
  json.url quote_url(quote, format: :json)
end
