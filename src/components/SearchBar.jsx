import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      margin: "30px 0",
      flexWrap: "wrap",
    },

    input: {
      width: "300px",
      padding: "12px",
      border: "2px solid #ff6b35",
      borderRadius: "8px",
      fontSize: "16px",
      outline: "none",
    },

    button: {
      padding: "12px 20px",
      backgroundColor: "#ff6b35",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
    },
  };

  const handleSearch = () => {
    if (search.trim() === "") {
      alert("Please enter a meal name.");
      return;
    }

    alert(`Searching for: ${search}`);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <button style={styles.button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
export default SearchBar;