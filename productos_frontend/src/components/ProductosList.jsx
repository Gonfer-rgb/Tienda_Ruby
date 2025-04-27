import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductosList = ({ onEditProducto }) => {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/productos');
      setProductos(response.data);
    } catch (error) {
      console.error("Error cargando productos:", error);
    }
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este producto?")) return;
    
    try {
      await axios.delete(`http://localhost:3000/api/v1/productos/${id}`);
      cargarProductos();
      alert("Producto eliminado exitosamente");
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  useEffect(() => { cargarProductos(); }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            
            <th>Clave</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id}>
              
              <td>{producto.clave}</td>
              <td>{producto.descripcion}</td>
              <td>${producto.precio}</td>
              <td>{producto.tipo}</td>
              <td>
              <button 
        onClick={() => onEditProducto(producto)}
        style={{
          backgroundColor: '#4CAF50', // Verde
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          marginRight: '5px',
          cursor: 'pointer'
        }}
      >
        Editar
      </button>
      <button 
        onClick={() => eliminarProducto(producto.id)}
        style={{
          backgroundColor: '#f44336', // Rojo
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Eliminar
      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductosList;