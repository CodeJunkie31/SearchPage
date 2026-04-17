import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
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
    <div style={{ padding: "20px" }}>
      <h2>Showing results for: {q}</h2>

      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {results.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: "100%", height: "150px", objectFit: "contain" }}
              />
              <h3 style={{ fontSize: "14px" }}>{product.title}</h3>
              <p>Price: R{product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;