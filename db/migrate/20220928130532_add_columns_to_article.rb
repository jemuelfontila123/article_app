class AddColumnsToArticle < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :highlight, :string
  end
end
