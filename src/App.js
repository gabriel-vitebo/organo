import { useState } from "react"
import Banner from "./components/Banner"
import Form from "./components/Form"

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
    </div>
  )
}

export default App
