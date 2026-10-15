import { useParams } from "react-router-dom";

function EtudiantDetails() {
  const { id, group } = useParams();

  return (
    <section className="page">
      <h2>Détails de l'étudiant</h2>

      <p>
        <strong>Identifiant :</strong> {id}
      </p>

      <p>
        <strong>Groupe :</strong> {group}
      </p>

      <p>
        L'étudiant avec l'ID {id} appartient au groupe {group}.
      </p>
    </section>
  );
}

export default EtudiantDetails;