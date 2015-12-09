class Api::TodosController < ApplicationController
  def create
    render json: Todo.create!(todo_params)
  end

  def update
    todo = Todo.find(params[:id])
    if todo.save(todo_params)
      render json: todo
    end
  end

  def destroy
    todo_item = Todo.find(params[:id])
    Todo.destroy(todo_item)
    render json: todo_item
  end

  def index
    render json: Todo.all
  end

  def show
    render json: Todo.find(params[:id])
  end


  private

  def todo_params
    params.require(:todo).permit(:title, :body, :done)
  end
end
