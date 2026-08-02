function Footer() {
  const styles = {
    footer: {
      marginTop: "40px",
      padding: "20px",
      backgroundColor: "#ff6b35",
      color: "white",
      textAlign: "center",
    },

    text: {
      margin: "5px",
    },
  };

  return (
    <footer style={styles.footer}>
      <h3>🍽️ Meal Planner</h3>

      <p style={styles.text}>
        Plan your meals with ease.
      </p>

      <p style={styles.text}>
        © 2026 Meal Planner. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
