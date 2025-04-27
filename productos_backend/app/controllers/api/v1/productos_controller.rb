class Api::V1::ProductosController < ApplicationController
    before_action :set_producto, only: [:show, :update, :destroy]
  
    def index
      @productos = Producto.all
      render json: @productos
    end
  
    def show
      render json: @producto
    end
  
    def create
      @producto = Producto.new(producto_params)
      if @producto.save
        render json: @producto, status: :created
      else
        render json: @producto.errors, status: :unprocessable_entity
      end
    end
  
    def update
      if @producto.update(producto_params)
        render json: @producto
      else
        render json: @producto.errors, status: :unprocessable_entity
      end
    end
  
    def destroy
      @producto.destroy
      head :no_content
    end
  
    private
  
    def set_producto
      @producto = Producto.find(params[:id])
    end
  
    def producto_params
      params.require(:producto).permit(:clave, :descripcion, :precio, :tipo)
    end
  end