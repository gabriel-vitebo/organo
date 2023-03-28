import "./Collaborator.css"

const Collaborator = ({ name, image, office }) => {
  return (
    <div className="collaborator">
      <div className="header">
        <img src={image} alt={`Foto de perfil de ${name}`} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}

export default Collaborator
