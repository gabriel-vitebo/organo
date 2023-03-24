import "./Form.css"
import BoxText from "../BoxText"
import List from "../List"
import Button from "../Button"
import { useState } from "react"

const Form = (props) => {
  const listTeam = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ]

  const [name, setName] = useState("")
  const [office, setOffice] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  const handleSave = (e) => {
    e.preventDefault()
    props.whenRegisteringACollaborator({
      name,
      office,
      image,
      team,
    })
  }

  return (
    <section className="content">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <BoxText
          isRequired={true}
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onModified={(value) => setName(value)}
        />
        <BoxText
          isRequired={true}
          placeholder="Digite seu cargo"
          label="Cargo"
          value={office}
          onModified={(value) => setOffice(value)}
        />
        <BoxText
          label="imagem"
          placeholder="informe o endereço da imagem"
          value={image}
          onModified={(value) => setImage(value)}
        />
        <List
          value={team}
          onModified={(value) => setTeam(value)}
          isRequired={true}
          label="Time"
          items={listTeam}
        />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
