import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

function SearchResults() {
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${q}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.products);
      });
  }, [q]);

  return (
    <div>
      <h2>Showing results for: {q}</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default SearchResults;