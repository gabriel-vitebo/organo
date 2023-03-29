import Collaborator from "../Collaborator"
import "./Team.css"

const Team = ({ team, collaborators }) => {
  return (
    collaborators.length > 0 && (
      <section
        className="team"
        style={{ backgroundColor: team.secondaryColor }}
      >
        <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
        <div className="collaborators">
          {collaborators.map((collaborator, index) => {
            return (
              <Collaborator
                backgroundColor={team.primaryColor}
                key={index}
                collaborator={collaborator}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Team
