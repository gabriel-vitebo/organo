import Collaborator from "../Collaborator"
import "./Team.css"
import hexToRgba from "hex-to-rgba"

const Team = ({
  team,
  teamCollaborators,
  whenDeleting,
  changeColor,
  toFavorites,
}) => {
  return (
    teamCollaborators.length > 0 && (
      <section
        className="team"
        style={{
          backgroundImage: "url(/assets/fundo.png)",
          backgroundColor: hexToRgba(team.color, "0.6"),
        }}
      >
        <input
          onChange={(e) => changeColor(e.target.value, team.id)}
          value={team.color}
          type="color"
          className="inputColor"
        />
        <h3 style={{ borderColor: team.color }}>{team.name}</h3>
        <div className="collaborators">
          {teamCollaborators.map((collaborator, index) => {
            return (
              <Collaborator
                backgroundColor={team.color}
                key={index}
                collaborator={collaborator}
                whenDeleting={whenDeleting}
                toFavorites={toFavorites}
              />
            )
          })}
        </div>
      </section>
    )
  )
}

export default Team
