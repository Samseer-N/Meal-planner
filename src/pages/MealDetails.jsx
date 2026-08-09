import { useParams } from "react-router-dom";

import images from "./images.jpg";
import vegpiza from "../components/vegpiza.jpg";
import chocolate from "../components/chocolate.jpg";

function MealDetails() {
  const { id } = useParams();

  const meals = {
    1: {
      name: "Chicken Biryani",
      category: "Main Course",
      area: "Indian",
      image: images,
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
      youtube: "https://youtu.be/PVO-4Jnjpfk",
    },

    2: {
      name: "Veg Pizza",
      category: "Fast Food",
      area: "Italian",
      image: vegpiza,
      ingredients: [
        "Pizza Dough",
        "Tomato Sauce",
        "Mozzarella Cheese",
        "Onion",
        "Capsicum",
        "Tomato",
        "Olives",
        "Italian Herbs",
      ],
      instructions:
        "Prepare the pizza dough. Spread tomato sauce over the dough. Add mozzarella cheese and vegetables. Sprinkle Italian herbs. Bake until the cheese melts and the crust becomes golden brown. Serve hot.",
      youtube: "https://www.youtube.com/",
    },

    3: {
      name: "Chocolate Cake",
      category: "Dessert",
      area: "American",
      image: chocolate,
      ingredients: [
        "All-Purpose Flour",
        "Cocoa Powder",
        "Sugar",
        "Eggs",
        "Milk",
        "Butter",
        "Baking Powder",
        "Vanilla Extract",
      ],
      instructions:
        "Mix flour, cocoa powder, sugar, and baking powder. Add eggs, milk, butter, and vanilla extract. Mix until smooth. Pour the batter into a cake pan and bake until fully cooked. Allow it to cool and serve.",
      youtube: "https://www.youtube.com/",
    },
  };

  const meal = meals[id] || meals[1];

  const styles = {
    container: {
      maxWidth: "800px",
      margin: "30px auto",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "white",
    },

    image: {
      width: "100%",
      height: "400px",
      objectFit: "cover",
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
      lineHeight: "1.8",
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

export default MealDetails;