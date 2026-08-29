import "./Button.css"

const Button = ({id, label, url}) => {

  return (
    <div id={id} className={`classic-button ${!url ? 'disabled' : ''}`}>
      <a href={url} rel="noopener noreferrer">{label}</a>
    </div>
  );
};

export default Button