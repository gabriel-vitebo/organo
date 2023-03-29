import "./BoxText.css"

const BoxText = ({
  label,
  valueText,
  placeholder,
  onModified,
  isRequired = false,
}) => {
  return (
    <div className="box-text">
      <label>{label}</label>
      <input
        value={valueText}
        onChange={(event) => onModified(event.target.value)}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  )
}

export default BoxText
