class Todo < ActiveRecord::Base
#  validates :title, :body, :done, presence: true
#  validates :done, inclusion: {in: [true, false]}

has_many: :steps,
dependent: :destroy

end
