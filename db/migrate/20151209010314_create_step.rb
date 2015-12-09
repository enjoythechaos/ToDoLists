class CreateSteps < ActiveRecord::Migration
  def change
    create_table :steps do |t|
      t.boolean :done, null: false
      t.integer :todo_id, null: false
      t.text :description, null: false
    end
  end
end
