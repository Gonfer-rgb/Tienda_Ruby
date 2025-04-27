class CreateCategorias < ActiveRecord::Migration[8.0]
  def change
    create_table :categorias do |t|
      t.string :claveTipo
      t.string :descripcion

      t.timestamps
    end
  end
end
