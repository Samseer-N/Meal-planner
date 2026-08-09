import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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
    const searchText = search.trim().toLowerCase();

    if (searchText === "") {
      alert("Please enter a meal name.");
      return;
    }

    if (
      searchText.includes("biryani") ||
      searchText.includes("chicken")
    ) {
      navigate("/meal/1");
    } else if (
      searchText.includes("pizza") ||
      searchText.includes("veg")
    ) {
      navigate("/meal/2");
    } else if (
      searchText.includes("cake") ||
      searchText.includes("chocolate")
    ) {
      navigate("/meal/3");
    } else {
      alert("Recipe not found. Try Biryani, Pizza, or Chocolate Cake.");
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button
        style={styles.button}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;