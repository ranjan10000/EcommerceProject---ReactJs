import { createContext, useMemo, useState } from "react";

export const ProductsContext = createContext([]);

export default function ProductProvider({ children }) {
    // Initialize dummy data using useMemo to prevent unnecessary recalculations
    const initialDummyData = useMemo(() => [
        { id: 1, name: "Product 1", price: 100, category: "Electronics", image:"organic-cosmetic-product.jpg" },
        { id: 2, name: "Product 2", price: 200, category: "Clothing", image:"organic-cosmetic-product.jpg"  },
        { id: 3, name: "Product 3", price: 300, category: "Books" , image:"organic-cosmetic-product.jpg" },
        // Add more data as needed
    ], []); // Empty array as a dependency means it runs only once

    const [dummyData, setDummyData] = useState(initialDummyData);

    return (
        <ProductsContext.Provider value={[dummyData, setDummyData]}>
            {children}
        </ProductsContext.Provider>
    );
}
