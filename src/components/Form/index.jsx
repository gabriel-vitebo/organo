import "./Form.css"
import BoxText from "../BoxText"
import List from "../List"
import Button from "../Button"

const Form = () => {
  const team = ["Loud", "Furia", "Keyed Stars", "TBK Esports", "Oddik"]

  const handleSave = (e) => {
    e.preventDefault()
    console.log("enviou")
  }

  return (
    <section className="content">
      <form onSubmit={handleSave}>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <BoxText isRequired={true} label="Nome" placeholder="Digite seu nome" />
        <BoxText
          isRequired={true}
          placeholder="Digite seu cargo"
          label="Cargo"
        />
        <BoxText label="imagem" placeholder="informe o endereço da imagem" />
        <List isRequired={true} label="Time" items={team} />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form
