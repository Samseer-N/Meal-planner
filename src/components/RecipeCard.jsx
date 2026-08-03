function RecipeCard() {
  const recipes = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: "biriyan.jpg",
      category: "Main Course",
    },
    {
      id: 2,
      name: "Veg Pizza",
      image: "vegpiza",
      category: "Fast Food",
    },
    {
      id: 3,
      name: "Chocolate Cake",
      image: "chocolate.jpg",
      category: "Dessert",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "25px",
      margin: "30px 0",
    },

    card: {
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
    },

    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
    },

    title: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: "10px 0",
    },

    category: {
      color: "#555",
      marginBottom: "10px",
    },

    button: {
      backgroundColor: "#ff6b35",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "15px",
    },
  };

  return (
    <div style={styles.container}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={styles.card}>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={styles.image}
          />

          <h3 style={styles.title}>{recipe.name}</h3>

          <p style={styles.category}>{recipe.category}</p>

          <button
            style={styles.button}
            onClick={() => alert(recipe.name)}
          >
            View Recipe
          </button>
        </div>
      ))}
    </div>
  );
}

export default RecipeCard;
