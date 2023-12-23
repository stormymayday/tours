const Tour = (props) => {
    const { tour } = props;
    const { id, image, info, name, price } = tour;
    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
            </div>
        </article>
    );
};
export default Tour;
