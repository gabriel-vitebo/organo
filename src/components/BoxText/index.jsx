import "./BoxText.css"

const BoxText = (props) => {
  return (
    <div className="box-text">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default BoxText
