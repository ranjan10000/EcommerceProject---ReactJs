import React, { useState, useMemo,useContext } from 'react';
import Pagination from '../Common/Pagination';// Update the path as needed
import '../css/CustomPagination.css'; // Import your custom CSS
import { ProductsContext }from "../../usecontexts/ProductProvider";

export default function View() {

    const [dummyData]= useContext(ProductsContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

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
                    </tr>
                </thead>
                <tbody>
                    {selectedItems.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <Pagination
                data={sortedItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}
