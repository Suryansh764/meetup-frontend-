import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Header from "./components /Header";
import Events from "./components /Event";
import { useState } from "react";
export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <div className="container">
      <Header setSearchQuery={setSearchQuery} />
      <hr />
      <Events searchQuery={searchQuery} />
      </div>
    </>
  );
}

