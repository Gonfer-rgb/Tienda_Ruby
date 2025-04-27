class Categoria < ApplicationRecord
    has_many :productos, foreign_key: 'tipo', primary_key: 'claveTipo'
    validates :claveTipo, presence: true, uniqueness: true
  end