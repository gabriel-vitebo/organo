import "./BoxText.css"

const BoxText = (props) => {
  const placeHolderModified = `${props.placeholder}...`

  const handleTextValue = (event) => {
    props.onModified(event.target.value)
  }
  return (
    <div className="box-text">
      <label>{props.label}</label>
      <input
        type="text"
        value={props.valueText}
        onChange={handleTextValue}
        required={props.isRequired}
        placeholder={placeHolderModified}
      />
    </div>
  )
}

export default BoxText
