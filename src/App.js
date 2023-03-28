import { useState } from "react"
import Banner from "./components/Banner"
import Form from "./components/Form"
import Team from "./components/Team"

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57c278",
      secondaryColor: "#d9f7e9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ]

  const [collaborators, setCollaborators] = useState([])
  const forTheNewCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        teamsName={teams.map((team) => team.name)}
        whenRegisteringACollaborator={(collaborator) =>
          forTheNewCollaboratorAdded(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          name={team.name}
          key={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          collaborators={collaborators}
        />
      ))}
    </div>
  )
}

export default App
