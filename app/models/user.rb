class User < ApplicationRecord
    has_secure_password
    has_many :gardens

    validates :first_name, presence: true
    validates :last_name, presence: true
    # validates :plant_hardiness_zone, presence: true, inclusion: { in: %w{1a 1b 2a 2b 31 3b 4a 4b 5a 5b 6a 6b 7a 7b 8a 8b 9a 9b 10a 10b 11a 11b 12a 12b 13a 13b}}
    validates :username, presence: true, uniqueness: true, length: {minimum: 4}
    validates :password, presence: true, confirmation: true, length: {minimum: 5}
    
end
