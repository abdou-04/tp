import StudentCard from "./StudentCard";

function Student() {
  const etudiants = [
    {
      id: 1,
      nom: "Ahmed",
      note: 15,
      group: "DD201",
    },
    {
      id: 2,
      nom: "Sara",
      note: 8,
      group: "DD205",
    },
    {
      id: 3,
      nom: "Youssef",
      note: 12,
      group: "DD209",
    },
  ];

  return (
    <section className="page">
      <h2>Liste des étudiants</h2>

      <div className="students-list">
        {etudiants.map(function (etudiant) {
          return (
            <StudentCard
              key={etudiant.id}
              id={etudiant.id}
              nom={etudiant.nom}
              note={etudiant.note}
              group={etudiant.group}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Student;