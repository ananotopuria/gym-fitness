import Cardbtn from "./Cardbtn";

function CardBtns({ buttons, handleContactClick }) {
  return (
    <div className="card-btns">
      {buttons.map((button, index) => (
        <Cardbtn
          key={index}
          icon={button.icon}
          text={button.text}
          onClick={button.text === "Contact" ? handleContactClick : undefined}
          className="card-btn"
        />
      ))}
    </div>
  );
}

export default CardBtns;
