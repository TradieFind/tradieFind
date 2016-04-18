json.array!(@reviews) do |review|
  json.extract! review, :id, :reviewer_id, :comment, :rating
  json.url review_url(review, format: :json)
end
