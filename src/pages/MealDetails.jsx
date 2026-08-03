function MealDetails() {
  const meal = {
    name: "Chicken Biryani",
    category: "Main Course",
    area: "Indian",
    image: "images.jpg",
    ingredients: [
      "Chicken",
      "Rice",
      "Onion",
      "Tomato",
      "Spices",
      "Mint Leaves",
    ],
    instructions:
      "Wash the rice. Marinate the chicken with spices. Cook the chicken. Add rice and cook until done. Garnish with mint leaves and serve hot.",
    youtube: "https://www.youtube.com/",
  };

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },

    image: {
      width: "100%",
      borderRadius: "10px",
    },

    title: {
      textAlign: "center",
      color: "#ff6b35",
      marginTop: "20px",
    },

    subTitle: {
      color: "#555",
    },

    heading: {
      marginTop: "20px",
      color: "#333",
    },

    list: {
      paddingLeft: "20px",
    },

    button: {
      display: "inline-block",
      marginTop: "20px",
      padding: "10px 20px",
      backgroundColor: "#ff6b35",
      color: "white",
      textDecoration: "none",
      borderRadius: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src={meal.image}
        alt={meal.name}
        style={styles.image}
      />

      <h1 style={styles.title}>{meal.name}</h1>

      <p style={styles.subTitle}>
        <strong>Category:</strong> {meal.category}
      </p>

      <p style={styles.subTitle}>
        <strong>Cuisine:</strong> {meal.area}
      </p>

      <h2 style={styles.heading}>Ingredients</h2>

      <ul style={styles.list}>
        {meal.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 style={styles.heading}>Instructions</h2>

      <p>{meal.instructions}</p>

      <a
        href={meal.youtube}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        Watch Recipe Video
      </a>
    </div>
  );
}