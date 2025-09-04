import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
