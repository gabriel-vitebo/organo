import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Team from "./components/Team"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#A6D157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#E06B69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      id: uuidv4(),
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ])

  const [collaborators, setCollaborators] = useState([])
  function handleRemoveCollaborator() {
    console.log("deletando o colaborador")
  }

  function changeTeamColor(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color
        }
        return team
      })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamsName={teams.map((team) => team.name)}
        whenRegisteringACollaborator={(collaborator) =>
          setCollaborators([...collaborators, collaborator])
        }
      />
      {collaborators.length > 0 && (
        <section className="teams">
          <h1>Minha organização</h1>
          {teams.map((team, index) => (
            <Team
              changeColor={changeTeamColor}
              team={team}
              key={index}
              teamCollaborators={collaborators.filter(
                (collaborator) => collaborator.team === team.name
              )}
              whenDeleting={handleRemoveCollaborator}
            />
          ))}
        </section>
      )}

      <Footer />
    </div>
  )
}

export default App
