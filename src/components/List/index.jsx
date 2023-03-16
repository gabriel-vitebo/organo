import "./List.css"

const List = (props) => {
  return (
    <div className="list">
      <label>{props.label}</label>
      <select>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default List
