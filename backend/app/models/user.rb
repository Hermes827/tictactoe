class User < ApplicationRecord
  has_secure_password
  # attr_accessor :email, :password
end

# has_secure_password is causing the bug and not letting data persist in the db
# with only has_secure_password enabled the bcrypt works when I make something in the console
