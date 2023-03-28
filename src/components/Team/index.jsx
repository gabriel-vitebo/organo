import Collaborator from "../Collaborator"
import "./Team.css"

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      {props.collaborators.map((collaborator) => (
        <Collaborator
          name={collaborator.name}
          image={collaborator.image}
          office={collaborator.office}
        />
      ))}
    </section>
  )
}

export default Team
