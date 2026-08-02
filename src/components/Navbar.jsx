import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#ff6b35",
      padding: "15px 30px",
      color: "white",
      flexWrap: "wrap",
    },

    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },

    navLinks: {
      display: "flex",
      listStyle: "none",
      gap: "25px",
      margin: 0,
      padding: 0,
    },

    link: {
      color: "white",
      textDecoration: "none",
      fontSize: "18px",
      fontWeight: "500",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        🍽️ Meal Planner
      </div>

      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/favorites" style={styles.link}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
