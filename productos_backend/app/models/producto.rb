class Producto < ApplicationRecord
    belongs_to :categoria, foreign_key: 'tipo', primary_key: 'claveTipo'
  end