import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Team from "./components/Team"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [teams, setTeams] = useState([])

  const [collaborators, setCollaborators] = useState([])
  function handleRemoveCollaborator(collaboratorID) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id != collaboratorID)
    )
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

  function registerTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuidv4(), favorite: false }])
  }

  function resolveFavorite(id) {
    setCollaborators(
      collaborators.map((collaborator) => {
        if (collaborator.id === id)
          collaborator.favorite = !collaborator.favorite
        return collaborator
      })
    )
  }

  return (
    <div className="App">
      <Banner />
      <Form
        registerTeam={registerTeam}
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
              toFavorites={resolveFavorite}
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
