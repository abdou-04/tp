import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page not-found">
      <h2>Erreur 404</h2>

      <p>Oups ! La page que vous recherchez n'existe pas.</p>

      <Link className="button-link" to="/">
        Retour à l'accueil
      </Link>
    </section>
  );
}

export default NotFound;