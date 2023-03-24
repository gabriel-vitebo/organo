import { useState } from "react"
import Banner from "./components/Banner"
import Form from "./components/Form"
import Team from "./components/Team"

function App() {
  const [collaborators, setCollaborators] = useState([])
  const forTheNewCollaboratorAdded = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form
        whenRegisteringACollaborator={(collaborator) =>
          forTheNewCollaboratorAdded(collaborator)
        }
      />
      <Team name="Programação" />
      <Team name="Front-End" />
      <Team name="Data Science" />
    </div>
  )
}

export default App
