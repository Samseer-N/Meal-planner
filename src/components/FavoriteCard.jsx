import biriyani from "D:\biriyani.webp"
function FavoriteCard() {
  const favoriteMeals = [
    {
      id: 1,
      name: "Chicken Biryani",
      image: "biriyan",
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      image: "paneer",
    },
    {
      id: 3,
      name: "Chocolate Cake",
      image: "choclate",
    },
  ];

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "20px",
      margin: "30px 0",
    },

    card: {
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    },

    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
    },

    title: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: "15px 0",
    },

    button: {
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
      cursor: "pointer",
      marginBottom: "15px",
    },

    emptyMessage: {
      textAlign: "center",
      fontSize: "20px",
      color: "#666",
      marginTop: "40px",
    },
  };

  return (
    <>
      {favoriteMeals.length === 0 ? (
        <h2 style={styles.emptyMessage}>
          No Favorite Meals Added
        </h2>
      ) : (
        <div style={styles.container}>
          {favoriteMeals.map((meal) => (
            <div key={meal.id} style={styles.card}>
              <img
                src={meal.image}
                alt={meal.name}
                style={styles.image}
              />

              <h3 style={styles.title}>
                {meal.name}
              </h3>

              <button
                style={styles.button}
                onClick={() => alert(`${meal.name} Removed`)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
export default FavoriteCard;
