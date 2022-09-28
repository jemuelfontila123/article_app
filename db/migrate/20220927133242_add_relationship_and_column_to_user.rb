class AddRelationshipAndColumnToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :username, :string
    add_column :users, :first_name, :string 
    add_column :users, :last_name, :string

    add_reference :articles, :user, index: true 
    add_reference :comments, :user, index:true
  end
end
