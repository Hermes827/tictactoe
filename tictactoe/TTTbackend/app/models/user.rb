class User < ApplicationRecord
  attr_accessible :email, :password, :password_confirmation
  validates_uniqueness_of :email
end
