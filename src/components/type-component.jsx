const TypeComponent = ({ type, soon }) => {
  return (
    <div>
      <h5 className={`label ${type}`}>{type.toUpperCase()}</h5>
      {soon && <h5 className={`label-soon`}>{"SOON !"}</h5>}
    </div>
  );
};
export default TypeComponent;
