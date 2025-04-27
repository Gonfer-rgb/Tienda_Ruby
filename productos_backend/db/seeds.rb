# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
# Limpiar tablas (opcional)
Categoria.destroy_all if Categoria.table_exists?

# Crear categorías de prueba
categorias = [
  { claveTipo: 'ELECT', descripcion: 'Electrónicos' },
  { claveTipo: 'ALIM', descripcion: 'Alimentos' }
]

categorias.each do |cat|
  Categoria.find_or_create_by!(claveTipo: cat[:claveTipo]) do |c|
    c.descripcion = cat[:descripcion]
    puts "Categoría creada: #{c.claveTipo}"
  end
rescue => e
  puts "Error creando categoría #{cat[:claveTipo]}: #{e.message}"
end

# Verificar en consola
puts "Total categorías: #{Categoria.count}"