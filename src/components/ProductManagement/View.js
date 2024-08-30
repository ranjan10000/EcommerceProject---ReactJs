import React, { useState, useMemo,useContext } from 'react';
import Pagination from '../Common/Pagination';// Update the path as needed
import '../css/CustomPagination.css'; // Import your custom CSS
import { ProductsContext }from "../../usecontexts/ProductProvider";
import { RiEditBoxLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import '../css/View.css';
import Modal from '../ProductManagement/Modal'
export default function View() {

    const [dummyData ,setDummyData]= useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [showModal, setShowModal] = useState(false);

    const [editItem, setEditItem] = useState(null);
    

    const itemsPerPage = 2; // Adjust as needed

    const sortedItems = useMemo(() => {
        let sortableItems = [...dummyData];
        if (sortConfig.key) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [dummyData, sortConfig]);

    const startIndex = currentPage * itemsPerPage;
    const selectedItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleDelete = (id) =>{
     const updatedData =  dummyData.filter(item => item.id !== id);
        setDummyData(updatedData);
        console.log(dummyData);
    }

    const handleEdit = (item) => {
        setEditItem(item);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setEditItem(null);
    };

    return (
        <div>
            <h5>Product List</h5>
            <table className="custom-table">
                <thead>
                    <tr>
                        <th onClick={() => handleSort('id')}>ID</th>
                        <th onClick={() => handleSort('name')}>Name</th>
                        <th onClick={() => handleSort('price')}>Price</th>
                        <th onClick={() => handleSort('category')}>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>
                                <span onClick={() => handleEdit(item)} className='prod-edit prod-action'><RiEditBoxLine/></span>
                                <span onClick={() => handleDelete(item.id)} className='prod-delete prod-action'><AiFillDelete/></span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Pagination
                data={sortedItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
              {showModal && <Modal item={editItem} onClose={closeModal} />}
        </div>
    );
}
