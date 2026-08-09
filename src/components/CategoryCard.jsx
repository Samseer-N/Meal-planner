import breakfast from "./breakfast.jpg";
import lunch from "./lunch.jpg";
import dinner from "./dinner.jpg";
import desert from "./desert.jpg";

function CategoryCard() {
  const categories = [
    {
      id: 1,
      name: "Breakfast",
      image: breakfast,
    },
    {
      id: 2,
      name: "Lunch",
      image: lunch,
    },
    {
      id: 3,
      name: "Dinner",
      image: dinner,
    },
    {
      id: 4,
      name: "Dessert",
      image: desert,
    },
  ];

  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "20px",
      margin: "30px 0",
    },

    card: {
      width: "180px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      overflow: "hidden",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      cursor: "pointer",
      backgroundColor: "#fff",
    },

    image: {
      width: "100%",
      height: "120px",
      objectFit: "cover",
    },

    title: {
      padding: "10px",
      fontSize: "18px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <div
          key={category.id}
          style={styles.card}
          onClick={() => alert(category.name)}
        >
          <img
            src={category.image}
            alt={category.name}
            style={styles.image}
          />

          <div style={styles.title}>
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCard;