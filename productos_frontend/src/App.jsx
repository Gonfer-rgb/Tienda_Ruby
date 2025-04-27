import React, { useState } from 'react';
import ProductosList from './components/ProductosList';
import ProductoForm from './components/ProductoForm';
import CategoriasManager from './components/CategoriasManager';

function App() {
  const [showCategorias, setShowCategorias] = useState(false);
  const [productoParaEditar, setProductoParaEditar] = useState(null);
  const [refreshProductos, setRefreshProductos] = useState(false);

  const handleProductoGuardado = () => {
    setProductoParaEditar(null);
    setRefreshProductos(!refreshProductos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Sistema de Gestión de Productos</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <button 
  onClick={() => setShowCategorias(!showCategorias)}
  style={{
    backgroundColor: '#4CAF50', // Verde
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#45a049' // Verde oscuro al pasar el mouse
    }
  }}
>
  {showCategorias ? 'Ocultar Categorías' : 'Gestionar Categorías'}
</button>
      </div>

      {showCategorias && <CategoriasManager />}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>
        <div>
          <ProductoForm 
            productoParaEditar={productoParaEditar}
            onProductoGuardado={handleProductoGuardado}
          />
        </div>
        <div>
          <ProductosList 
            onEditProducto={setProductoParaEditar}
            refresh={refreshProductos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;