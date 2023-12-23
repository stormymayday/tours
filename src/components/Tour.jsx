const Tour = (props) => {
    const { tour, removeTour } = props;
    const { id, image, info, name, price } = tour;
    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
            <button
                className="btn btn-block delete-btn"
                type="button"
                onClick={() => removeTour(id)}
            >
                not interested
            </button>
        </article>
    );
};
export default Tour;
