import "./Form.css"
import BoxText from "../BoxText"
import List from "../List"
import Button from "../Button"
import { useState } from "react"

const Form = (props) => {
  const [name, setName] = useState("")
  const [office, setOffice] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  function cleanForm() {
    setName("")
    setOffice("")
    setImage("")
    setTeam("")
  }

  const handleSave = (e) => {
    e.preventDefault()
    props.whenRegisteringACollaborator({
      name,
      office,
      image,
      team,
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
          items={props.teamsName}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
