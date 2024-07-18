import Cardbtn from "./Cardbtn";

function CardBtns({ buttons }) {
  return (
    <div className="card-btns">
      {buttons.map((button, index) => (
        <Cardbtn
          key={index}
          icon={button.icon}
          text={button.text}
          className="card-btn"
        />
      ))}
    </div>
  );
}

export default CardBtns;
