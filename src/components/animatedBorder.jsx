import "./Border.css"

const animatedBorder = ({id, label}) => {
  return (
    <div id={id} className="ani-border-outer">
      <div className="inner">
        <p>{label}</p>
      </div>
    </div>
  );
};

export default animatedBorder