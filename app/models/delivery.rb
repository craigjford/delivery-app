class Delivery < ApplicationRecord
  belongs_to :user
  belongs_to :customer
  belongs_to :driver
end
