import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Team from "./components/Team"

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57c278",
    },
    {
      name: "Front-End",
      color: "#82CFFA",
    },
    {
      name: "Data Science",
      color: "#A6D157",
    },
    {
      name: "Devops",
      color: "#E06B69",
    },
    {
      name: "UX e Design",
      color: "#DB6EBF",
    },
    {
      name: "Mobile",
      color: "#FFBA05",
    },
    {
      name: "Inovação e Gestão",
      color: "#FF8A29",
    },
  ])

  const [collaborators, setCollaborators] = useState([])
  function handleRemoveCollaborator() {
    console.log("deletando o colaborador")
  }

  function changeTeamColor(color, name) {
    setTeams(
      teams.map((team) => {
        if (team.name === name) {
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
