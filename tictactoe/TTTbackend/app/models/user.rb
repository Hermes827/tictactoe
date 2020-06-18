class User < ApplicationRecord
  # attr_accessor :email, :password
  #this was what was causing data to save as nil, why do I need to use attr_accessor anyways?
  #it might not be necessary for what im using
  validates_uniqueness_of :email
end
