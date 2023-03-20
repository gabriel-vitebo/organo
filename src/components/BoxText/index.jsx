import "./BoxText.css"

const BoxText = (props) => {
  const placeHolderModified = `${props.placeholder}...`
  let valueText = ""
  const handleTextValue = (event) => {
    valueText = event.target.value
    console.log(valueText)
  }
  return (
    <div className="box-text">
      <label>{props.label}</label>
      <input
        type="text"
        value={valueText}
        onChange={handleTextValue}
        required={props.isRequired}
        placeholder={placeHolderModified}
      />
    </div>
  )
}

export default BoxText
