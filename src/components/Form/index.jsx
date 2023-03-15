import "./Form.css"
import BoxText from "../BoxText"

const Form = () => {
  return (
    <section className="content">
      <form>
        <h2>Preencha os dados para criar o card do colaborador:</h2>
        <BoxText label="Nome" placeholder="Digite seu nome" />
        <BoxText label="Cargo" placeholder="Digite seu cargo" />
        <BoxText label="imagem" placeholder="informe o endereço da imagem" />
      </form>
    </section>
  )
}

export default Form
