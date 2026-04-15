CatalogoPage.jsx          




import { useState } from "react";
import productsData from "./data/products.json";
import { SearchBar } from "./components/SearchBar";
import { ProductList } from "./components/ProductList";

export function CatalogPage() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todas");

    const categories = [
        "Todas",
        ...new Set(productsData.map((product) => product.category)),
    ];

    // O erro estava aqui: você fechou a função CatalogPage com uma } extra.
    function filterProducts(search, selectedCategory) {
        return productsData.filter(p => {
            const found = p.name.toLowerCase().includes(
                search.toLowerCase()
            );

            const hasCategory =
                p.category === selectedCategory || selectedCategory === 'Todas';

            return found && hasCategory;
        });
    } // Esta chave fecha apenas a filterProducts

    const filteredProducts = filterProducts(search, selectedCategory);

    return (
        <main style={{ padding: "20px" }}>
            <h1>Loja de produtos</h1>
            <nav className="category-menu">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={category === selectedCategory ? "active" : ""}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </nav>

            <SearchBar search={search} setSearch={setSearch} />
            <ProductList products={filteredProducts} />
        </main>
    );
} 
