function Cardbtn({ icon, text, onClick }) {
    return (
        <button className="card-btn" onClick={onClick}>
            {icon && <span>{icon}</span>}
            {text && <span>&nbsp;{text}</span>}
        </button>
    )
}

export default Cardbtn;
