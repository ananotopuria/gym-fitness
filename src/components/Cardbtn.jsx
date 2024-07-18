function Cardbtn({ icon, text}) {
    return (
        <button className="card-btn">
            {icon && <span>{icon}</span>}
            {text && <span>&nbsp;{text}</span>}
        </button>
    )
}

export default Cardbtn
