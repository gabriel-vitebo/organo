import "./Box.css"

const Box = ({
  type = "text",
  label,
  valueText,
  placeholder,
  onModified,
  isRequired = false,
}) => {
  return (
    <div className={`box box-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valueText}
        onChange={(event) => onModified(event.target.value)}
        required={isRequired}
        placeholder={placeholder}
      />
    </div>
  )
}

export default Box
