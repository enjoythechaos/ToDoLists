class Step < ActiveRecord::Base

  validates :todo_id, :description, :done, presence: true
  validates :done, inclusion: {in: [true, false]}

belongs_to: :todo

end
