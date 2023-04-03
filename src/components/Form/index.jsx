import "./Form.css"
import BoxText from "../BoxText"
import List from "../List"
import Button from "../Button"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const Form = ({ teamsName, whenRegisteringACollaborator, registerTeam }) => {
  const [name, setName] = useState("")
  const [office, setOffice] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")
  const [teamName, setTeamName] = useState("")
  const [teamColor, setTeamColor] = useState("")

  function cleanForm() {
    setName("")
    setOffice("")
    setImage("")
    setTeam("")
  }

  const handleSave = (e) => {
    e.preventDefault()
    whenRegisteringACollaborator({
      name,
      office,
      image,
      team,
      id: uuidv4(),
    })
    cleanForm()
  }

  return (
    <section className="content">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <BoxText
          isRequired={true}
          label="Nome"
          placeholder="Digite seu nome"
          valueText={name}
          onModified={(value) => setName(value)}
        />
        <BoxText
          isRequired={true}
          placeholder="Digite seu cargo"
          label="Cargo"
          valueText={office}
          onModified={(value) => setOffice(value)}
        />
        <BoxText
          label="imagem"
          placeholder="informe o endereço da imagem"
          valueText={image}
          onModified={(value) => setImage(value)}
        />
        <List
          value={team}
          onModified={(value) => setTeam(value)}
          isRequired={true}
          label="Time"
          items={teamsName}
        />
        <Button text="Criar card" />
      </form>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          registerTeam({ name: teamName, color: teamColor })
        }}
      >
        <h2>Preencha os dados para criar um novo time</h2>
        <BoxText
          isRequired
          label="Nome"
          placeholder="Digite o nome do time"
          valueText={teamName}
          onModified={(value) => setTeamName(value)}
        />
        <BoxText
          isRequired
          placeholder="Digite a cor do time"
          label="Cor"
          valueText={teamColor}
          onModified={(value) => setTeamColor(value)}
        />
        <Button text="Criar time" />
      </form>
    </section>
  )
}

export default Form
