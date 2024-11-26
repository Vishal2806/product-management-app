import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // State to manage products
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: '$10', image: 'https://img.freepik.com/free-photo/laptop-office-plant-black-background-top-view_169016-34505.jpg?t=st=1732603865~exp=1732607465~hmac=f783c0951f47db1d4f6172aae249cb417522be560a1a658442f1d31112d88008&w=1060' },
    { id: 2, name: 'Product 2', price: '$20', image: 'https://media.wired.com/photos/5bd883dc5b66a763e54f0b22/master/w_1920,c_limit/macbookair3.jpg' },
    { id: 3, name: 'Product 3', price: '$30', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  ]);

  const [newProduct, setNewProduct] = useState({ id: 0, name: '', price: '', image: '' });
  const [editProductId, setEditProductId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  // Add a new product
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) return;
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ id: 0, name: '', price: '', image: '' });
  };

  // Edit an existing product
  const handleEditProduct = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setNewProduct(productToEdit);
      setEditProductId(id);
    }
  };

  // Save edited product
  const handleSaveProduct = () => {
    if (!editProductId) return;
    setProducts(
      products.map((product) =>
        product.id === editProductId ? { ...product, ...newProduct } : product
      )
    );
    setNewProduct({ id: 0, name: '', price: '', image: '' });
    setEditProductId(null);
  };

  // Delete a product
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logout (reset to login screen)
  const handleLogout = () => {
    setShowProducts(false);
    setIsAdmin(false);
  };

  return (
    <div className="app">
      {!showProducts && !isAdmin ? (
        <div className="login-container">
          <h1 className="title">Welcome</h1>
          <div className="button-container">
            <button className="login-button user-login" onClick={() => setShowProducts(true)}>
              Login as User
            </button>
            <button className="login-button admin-login" onClick={() => setIsAdmin(true)}>
              Login as Admin
            </button>
          </div>
        </div>
      ) : isAdmin ? (
        <div className="admin-container">
          <h1 className="title">Admin Panel</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          <div className="admin-form">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Price"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Product Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            />
            <button onClick={editProductId ? handleSaveProduct : handleAddProduct}>
              {editProductId ? 'Save Product' : 'Add Product'}
            </button>
          </div>
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button onClick={() => handleEditProduct(product.id)} className="edit-button">
                  Edit
                </button>
                <button onClick={() => handleDeleteProduct(product.id)} className="delete-button">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="product-container">
          <h1 className="title">Product List</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          <input
            type="text"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
