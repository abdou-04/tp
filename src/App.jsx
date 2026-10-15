import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Aside from "./Aside";
import Home from "./Home";
import Student from "./student";
import Contact from "./Contact";
import EtudiantDetails from "./EtudiantDetails";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="layout">
        <Aside />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/etudiants" element={<Student />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/etudiants/:id/:group"
              element={<EtudiantDetails />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;