class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :description
      t.text :instructions
      t.integer :prep_time
      t.integer :cooking_time
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
