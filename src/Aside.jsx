import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside className="sidebar">
      <h2>Menu</h2>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/etudiants">Students</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/etudiants/1/DD201">
              EtudiantDetails
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Aside;