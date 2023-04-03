import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import "./Collaborator.css"

const Collaborator = ({
  collaborator,
  backgroundColor,
  whenDeleting,
  toFavorites,
}) => {
  function favorite() {
    toFavorites(collaborator.id)
  }

  const propsFavorites = {
    size: 25,
    onClick: favorite,
  }

  return (
    <div className="collaborator">
      <AiFillCloseCircle
        size={25}
        className="delete"
        onClick={() => whenDeleting(collaborator.id)}
      />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img
          src={collaborator.image}
          alt={`Foto de perfil de ${collaborator.name}`}
        />
      </div>
      <div className="footer">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.office}</h5>
        <div className="favorites">
          {collaborator.favorite ? (
            <AiFillHeart {...propsFavorites} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavorites} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Collaborator
