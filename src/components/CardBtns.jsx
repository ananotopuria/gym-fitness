import Cardbtn from "./Cardbtn";

function CardBtns({ buttons, handleContactClick, handleDownload, handleShare }) {
  return (
    <div className="card-btns">
      {buttons.map((button, index) => (
        <Cardbtn
          key={index}
          icon={button.icon}
          text={button.text}
          onClick={() => {
            if (button.text === "Save Card") handleDownload();
            else if (button.text === "Share Card") handleShare();
            else if (button.text === "Contact") handleContactClick();
          }}
        />
      ))}
    </div>
  );
}

export default CardBtns;
