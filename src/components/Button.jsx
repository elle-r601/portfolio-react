import "./Button.css"

const Button = ({id, label}) => {
  return (
    <div id={id} className="classic-button">{label}</div>
  );
};

export default Button