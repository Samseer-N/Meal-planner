import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

function Home() {
  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#f8f9fa",
      fontFamily: "Arial, sans-serif",
    },

    heading: {
      textAlign: "center",
      color: "#ff6b35",
      marginTop: "20px",
      fontSize: "32px",
    },

    subtitle: {
      textAlign: "center",
      color: "#555",
      marginBottom: "30px",
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />

      <h1 style={styles.heading}>Meal Planner</h1>

      <p style={styles.subtitle}>
        Discover delicious meals and plan your day!
      </p>

      <SearchBar />

      <CategoryCard />

      <RecipeCard />

      <Footer />
    </div>
  );
}

export default Home;
