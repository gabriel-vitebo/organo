import { useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
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
  function handleRemoveCollaborator() {
    console.log("deletando o colaborador")
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
      <section className="teams">
        <h1>Minha organização</h1>
        {teams.map((team, index) => (
          <Team
            team={team}
            key={index}
            primaryColor={team.primaryColor}
            secondaryColor={team.secondaryColor}
            collaborators={collaborators.filter(
              (collaborator) => collaborator.team === team.name
            )}
            whenDeleting={handleRemoveCollaborator}
          />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default App
