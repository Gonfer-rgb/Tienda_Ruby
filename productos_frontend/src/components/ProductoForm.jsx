import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductoForm = ({ productoParaEditar, onProductoGuardado }) => {
  const [formData, setFormData] = useState({
    clave: '',
    descripcion: '',
    precio: '',
    tipo: ''
  });
  const [categorias, setCategorias] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);

  useEffect(() => {
    cargarCategorias();
    if (productoParaEditar) {
      setFormData({
        clave: productoParaEditar.clave,
        descripcion: productoParaEditar.descripcion,
        precio: productoParaEditar.precio,
        tipo: productoParaEditar.tipo
      });
      setModoEdicion(true);
    }
  }, [productoParaEditar]);

  const cargarCategorias = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/categorias');
      setCategorias(response.data);
    } catch (error) {
      console.error("Error cargando categorías:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modoEdicion) {
        await axios.put(
          `http://localhost:3000/api/v1/productos/${productoParaEditar.id}`,
          { producto: formData }
        );
        alert('Producto actualizado exitosamente!');
      } else {
        await axios.post(
          'http://localhost:3000/api/v1/productos',
          { producto: formData }
        );
        alert('Producto creado exitosamente!');
      }
      onProductoGuardado();
      resetForm();
    } catch (error) {
      alert(`Error: ${error.response?.data?.error || error.message}`);
    }
  };

  const resetForm = () => {
    setFormData({ clave: '', descripcion: '', precio: '', tipo: '' });
    setModoEdicion(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{modoEdicion ? 'Editar Producto' : 'Crear Producto'}</h2>
      
      <div>
        <label>Clave:</label>
        <input
          type="text"
          name="clave"
          value={formData.clave}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Descripción:</label>
        <input
          type="text"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label>Tipo (Categoría):</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          required
        >
          <option value="">Seleccione una categoría</option>
          {categorias.map(cat => (
            <option key={cat.claveTipo} value={cat.claveTipo}>
              {cat.claveTipo} { }
            </option>
          ))}
        </select>
      </div>

      <button 
  type="submit"
  style={{
    backgroundColor: '#4CAF50', // Verde
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    ':hover': {
      backgroundColor: '#45a049'
    }
  }}
>
  {modoEdicion ? 'Actualizar Producto' : 'Crear Producto'}
</button>
      {modoEdicion && (
        <button type="button" onClick={resetForm} style={{ marginLeft: '10px' }}>
          Cancelar Edición
        </button>
      )}
    </form>
  );
};

export default ProductoForm;