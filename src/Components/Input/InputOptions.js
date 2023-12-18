import "./inputoptions.css";

export const InputOptions = ({ Icon, title, color }) => {
  return (
    <div className="input-option">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};
