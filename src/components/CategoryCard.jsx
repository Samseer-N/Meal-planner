import { useNavigate } from "react-router-dom";

function CategoryCard() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Breakfast",
      image: "breakfast.jpg",
    },
    {
      id: 2,
      name: "Lunch",
      image: "lunch.jpg",
    },
    {
      id: 3,
      name: "Dinner",
      image: "dinner.jpg",
    },
    {
      id: 4,
      name: "Dessert",
      image: "desert.jpg",
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
      backgroundColor: "white",
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

  const handleCategoryClick = (category) => {
    if (category === "Breakfast") {
      navigate("/meal/1");
    } else if (category === "Lunch") {
      navigate("/meal/1");
    } else if (category === "Dinner") {
      navigate("/meal/1");
    } else if (category === "Dessert") {
      navigate("/meal/3");
    }
  };

  return (
    <div style={styles.container}>
      {categories.map((category) => (
        <div
          key={category.id}
          style={styles.card}
          onClick={() => handleCategoryClick(category.name)}
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