import { AiFillCloseCircle } from "react-icons/ai"
import "./Collaborator.css"

const Collaborator = ({ collaborator, backgroundColor, whenDeleting }) => {
  return (
    <div className="collaborator">
      <AiFillCloseCircle size={25} className="delete" onClick={whenDeleting} />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img
          src={collaborator.image}
          alt={`Foto de perfil de ${collaborator.name}`}
        />
      </div>
      <div className="footer">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.office}</h5>
      </div>
    </div>
  )
}

export default Collaborator
