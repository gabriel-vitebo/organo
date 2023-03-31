import Collaborator from "../Collaborator"
import "./Team.css"

const Team = ({ team, teamCollaborators, whenDeleting, changeColor }) => {
  return (
    teamCollaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/assets/fundo.png)",
          backgroundColor: team.secondaryColor,
        }}
      >
        <input
          onChange={(e) => changeColor(e.target.value, team.name)}
          value={team.primaryColor}
          type="color"
          className="inputColor"
        />
        <h3 style={{ borderColor: team.primaryColor }}>{team.name}</h3>
        <div className="collaborators">
          {teamCollaborators.map((collaborator, index) => {
            return (
              <Collaborator
                backgroundColor={team.primaryColor}
                key={index}
                collaborator={collaborator}
                whenDeleting={whenDeleting}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Team
