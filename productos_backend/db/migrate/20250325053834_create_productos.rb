class CreateProductos < ActiveRecord::Migration[8.0]
  def change
    create_table :productos do |t|
      t.string :clave
      t.string :descripcion
      t.decimal :precio
      t.string :tipo

      t.timestamps
    end
  end
end
