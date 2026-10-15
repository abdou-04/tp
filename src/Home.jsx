import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <h2>Bienvenue</h2>

      <p>
        Bienvenue dans notre application de gestion des étudiants.
      </p>

      <p>
        Cette application permet de consulter les étudiants,
        leurs notes et leurs informations.
      </p>

      <Link className="button-link" to="/etudiants">
        Voir les étudiants
      </Link>
    </section>
  );
}

export default Home;