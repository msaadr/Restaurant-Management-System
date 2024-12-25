import axios from 'axios';
import React, { useState } from 'react';

const DeleteItem = () => {
    const [itemIdentifier, setItemIdentifier] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/addItemToCart/deleteItem/${itemIdentifier}`);
            if (response.status === 200) {
                setMessage('Item deleted successfully!');
                setError('');
            } else {
                setMessage('');
                setError('Item not found or could not be deleted.');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            setError('Error deleting item. Please try again later.');
            setMessage('');
        }
    };

    return (
        <div>
            <h2>Delete Item</h2>
            <label htmlFor="itemIdentifier">
                Enter the name or ID of the item to delete:
            </label>
            <input
                id="itemIdentifier"
                type="text"
                placeholder="e.g., 1 or cake"
                value={itemIdentifier}
                onChange={(e) => setItemIdentifier(e.target.value)}
            />
            <button onClick={handleDelete}>Delete Item</button>

            {error && <div style={{ color: 'red' }}>{error}</div>}
            {message && <div style={{ color: 'green' }}>{message}</div>}
        </div>
    );
};

export default DeleteItem;
