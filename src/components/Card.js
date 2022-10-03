const Card = props => {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image" alt="café" />
                <h2 className="card__title">{props.title}</h2>
                <p className="card__desciption">{props.description}</p>
            </div>
            <button className="card__btn">Agregar</button>
        </div>
    )
}

export default Card