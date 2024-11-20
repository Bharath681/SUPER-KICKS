import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId, onClose }) => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
                setProduct(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch product details');
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [productId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-details-modal">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="product-details">
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p className="brand">{product.brand}</p>
                    <p className="price">₹{product.price}</p>
                    <p className="description">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
