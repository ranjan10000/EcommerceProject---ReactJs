import { useState, useContext, useEffect } from 'react';
import { ProductsContext } from "../../usecontexts/ProductProvider";
import '../css/Modal.css'; // Assuming you have some CSS for modal styling

export default function Modal({ item, onClose }) {
    const [dummyData, setDummyData] = useContext(ProductsContext);
    const [editItem, setEditItem] = useState(item);

    useEffect(() => {
        setEditItem(item);
    }, [item]);

    const handleSave = () => {
        const updatedData = dummyData.map((currentItem) =>
            currentItem.id === editItem.id ? editItem : currentItem
        );
        setDummyData(updatedData);
        onClose();
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Edit Product</h2>
                <label>ID: {editItem?.id}</label>
                <input
                    type="text"
                    value={editItem?.name || ''}
                    onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                    placeholder="Name"
                />
                <input
                    type="number"
                    value={editItem?.price || ''}
                    onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
                    placeholder="Price"
                />
                <input
                    type="text"
                    value={editItem?.category || ''}
                    onChange={(e) => setEditItem({ ...editItem, category: e.target.value })}
                    placeholder="Category"
                />
                <button onClick={handleSave} className="save-button">Save</button>
            </div>
        </div>
    );
}
