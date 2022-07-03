class Garden < ApplicationRecord
    belongs_to :user
    has_many :garden_squares
    has_many :crops, through: :garden_squares

    validates :name, presence: true
    validates :rows, presence: true, numericality: { in: (3..10) }
    validates :columns, presence: true, numericality: { in: (3..10) }
    validates :user_id, presence: true

end
