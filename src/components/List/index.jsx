import "./List.css"

const List = ({ label, onModified, isRequired = false, value, items }) => {
  return (
    <div className="list">
      <label>{label}</label>
      <select
        onChange={(event) => onModified(event.target.value)}
        required={isRequired}
        value={value}
      >
        <option />
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default List
