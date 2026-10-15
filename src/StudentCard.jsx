import { Link } from "react-router-dom";

function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.nom}</h3>

      <p>
        <strong>Identifiant :</strong> {props.id}
      </p>

      <p>
        <strong>Groupe :</strong> {props.group}
      </p>

      <p>
        <strong>Note :</strong> {props.note}/20
      </p>

      <p>
        <strong>Statut :</strong>{" "}
        <span
          className={
            props.note >= 10 ? "admis" : "redoublant"
          }
        >
          {props.note >= 10 ? "Admis" : "Redoublant"}
        </span>
      </p>

      <Link
        className="button-link"
        to={"/etudiants/" + props.id + "/" + props.group}
      >
        Voir les détails
      </Link>
    </div>
  );
}

export default StudentCard;