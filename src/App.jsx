import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import MealDetails from "./pages/MealDetails";
import FavoriteCard from "./components/FavoriteCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/meal/:id"
          element={<MealDetails />}
        />

        <Route
          path="/favorites"
          element={<FavoriteCard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;