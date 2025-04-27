class Api::V1::CategoriasController < ApplicationController
    before_action :set_categoria, only: [:show, :update, :destroy]
  
    def index
      @categorias = Categoria.all
      render json: @categorias
    end
  
    def show
      render json: @categoria
    end
  
    def create
      @categoria = Categoria.new(categoria_params)
      if @categoria.save
        render json: @categoria, status: :created
      else
        render json: @categoria.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @categoria.update(categoria_params)
        render json: @categoria
      else
        render json: @categoria.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @categoria.destroy
      head :no_content
    end
  
    private
  
    def set_categoria
      @categoria = Categoria.find_by!(claveTipo: params[:id])
    end
  
    def categoria_params
      params.require(:categoria).permit(:claveTipo)
    end
  end