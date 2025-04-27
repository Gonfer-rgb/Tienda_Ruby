import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriasManager = ({ onCategoriaCreada }) => {
  const [categorias, setCategorias] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState('');

  // Cargar categorías
  const cargarCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error("Error cargando categorías:", error);
    }
  };

  // Eliminar categoría
  const eliminarCategoria = async (claveTipo) => {
    if (!window.confirm(`¿Eliminar la categoría "${claveTipo}" y todos sus productos asociados?`)) return;
    
    try {
      await axios.delete(`http://localhost:3000/api/v1/categorias/${claveTipo}`);
      alert('Categoría eliminada exitosamente');
      cargarCategorias(); // Recargar la lista
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || 'No se pudo eliminar la categoría'}`);
    }
  };

  // Crear categoría
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/categorias',
        { categoria: { claveTipo: nombreCategoria } }
      );
      alert('Categoría creada exitosamente!');
      setNombreCategoria('');
      cargarCategorias();
      onCategoriaCreada(response.data.claveTipo);
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  useEffect(() => { cargarCategorias(); }, []);

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h3>Gestión de Categorías</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre de la Categoría:</label>
          <input
            type="text"
            value={nombreCategoria}
            onChange={(e) => setNombreCategoria(e.target.value)}
            required
          />
        </div>
        <button 
  type="submit"
  style={{
    backgroundColor: '#4CAF50', // Verde
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    ':hover': {
      backgroundColor: '#45a049'
    }
  }}
>
  Crear Categoría
</button>
      </form>

      <h4>Categorías Existentes:</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
      {categorias.map(cat => (
  <li 
    key={cat.claveTipo} 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      margin: '5px 0',
      padding: '8px',
      backgroundColor: '#ffffff',  // Fondo blanco
      color: '#333',              // Texto oscuro
      border: '1px solid #ddd',   // Borde sutil
      borderRadius: '4px'         // Esquinas redondeadas
    }}
  >
    <span>{cat.claveTipo}</span>
    <button 
      onClick={() => eliminarCategoria(cat.claveTipo)}
      style={{ 
        background: '#ff4444', 
        color: 'white', 
        border: 'none', 
        padding: '5px 10px',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      Eliminar
    </button>
  </li>
))}
      </ul>
    </div>
  );
};

export default CategoriasManager;