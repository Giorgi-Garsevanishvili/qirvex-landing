const TypeComponent = ({type}) => {
  return (
    <div>
      <h5 className={`label ${type}`}>{type.toUpperCase()}</h5>
    </div>
  )
}
export default TypeComponent