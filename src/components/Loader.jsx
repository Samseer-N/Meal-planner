function Loader() {
  const styles = {
    loader: {
      textAlign: "center",
      fontSize: "22px",
      color: "#ff6b35",
      margin: "40px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.loader}>
      Loading Meals...
    </div>
  );
}

export default Loader;
