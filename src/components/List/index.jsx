import "./List.css"

const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onModified(event.target.value)}
        required={props.isRequired}
        value={props.valueList}
      >
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default List
