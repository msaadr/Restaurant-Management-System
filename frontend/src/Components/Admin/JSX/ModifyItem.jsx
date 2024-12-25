import axios from 'axios';
import React, { useState } from 'react';

const ModifyItem = () => {
    const [itemIdentification, setItemIdentification] = useState('');
    const [itemDetails, setItemDetails] = useState(null);
    const [error, setError] = useState('');
    const [updatedItem, setUpdatedItem] = useState({
        item_name: '',
        item_price: '',
        item_quantity: '',
        description: '',
        image_link: '',
    });

    const handleModify = async (identifier) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/addItemToCart/getSpecificItem/${identifier}`);

            if (response.data && response.data.length > 0) {
                setItemDetails(response.data[0]);
                setError('');
                setUpdatedItem({
                    item_name: response.data[0].item_name,
                    item_price: response.data[0].item_price,
                    item_quantity: response.data[0].item_quantity,
                    description: response.data[0].description,
                    image_link: response.data[0].image_link,
                });
            } else {
                setError('Item not found!');
                setItemDetails(null);
            }
            console.log('Item details:', response.data);
        } catch (error) {
            console.error('Error fetching item:', error);
            setError('Error fetching item. Please try again later.');
            setItemDetails(null);
        }
    };

    const handleUpdateItem = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/addItemToCart/updateItem/${itemDetails.item_id}`, updatedItem);

            if (response.status === 200) {
                alert('Item updated successfully!');
            } else {
                setError('Failed to update item!');
            }
        } catch (error) {
            console.error('Error updating item:', error);
            setError('Error updating item. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Modify Item</h2>
            <label htmlFor="itemIdentifier">
                Enter id or name of the item to Modify:
            </label>
            <input
                id="itemIdentifier"
                type="text"
                placeholder="e.g., 1 or cake"
                value={itemIdentification}
                onChange={(e) => setItemIdentification(e.target.value)}
            />
            <button onClick={() => handleModify(itemIdentification)}>Submit</button>

            {error && <div style={{ color: 'red' }}>{error}</div>}

            {itemDetails && (
                <div>
                    <h3>Item Details:</h3>
                    <p><strong>Name:</strong> {itemDetails.item_name}</p>
                    <p><strong>Price:</strong> {itemDetails.item_price}</p>
                    <p><strong>Quantity:</strong> {itemDetails.item_quantity}</p>
                    <p><strong>Description:</strong> {itemDetails.description}</p>
                    <p><strong>Image:</strong> <img src={itemDetails.image_link} alt={itemDetails.item_name} width="100" /></p>

                    <h4>Update Item</h4>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={updatedItem.item_name}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, item_name: e.target.value })}
                        />
                    </label>
                    <label>
                        Price:
                        <input
                            type="number"
                            value={updatedItem.item_price}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, item_price: e.target.value })}
                        />
                    </label>
                    <label>
                        Quantity:
                        <input
                            type="number"
                            value={updatedItem.item_quantity}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, item_quantity: e.target.value })}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={updatedItem.description}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, description: e.target.value })}
                        />
                    </label>
                    <label>
                        Image Link:
                        <input
                            type="text"
                            value={updatedItem.image_link}
                            onChange={(e) => setUpdatedItem({ ...updatedItem, image_link: e.target.value })}
                        />
                    </label>

                    <button onClick={handleUpdateItem}>Update Item</button>
                </div>
            )}
        </div>
    );
};

export default ModifyItem;
