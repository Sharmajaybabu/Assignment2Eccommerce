"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface ProductGridProps {
    setProductCount?: (count: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ setProductCount }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProducts(res.data);
            setLoading(false);
            if (setProductCount) setProductCount(res.data.length);
        });
    }, [setProductCount]);

    if (loading)
        return <div className="text-white text-center py-10">Loading...</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductGrid;
