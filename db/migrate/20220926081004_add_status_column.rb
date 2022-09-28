class AddStatusColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :status, :integer 
    add_column :comments, :status, :integer
  end
end
