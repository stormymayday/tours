import { useState } from "react";

const Tour = (props) => {
    const { tour, removeTour } = props;

    const { id, image, info, name, price } = tour;

    const [readMore, setReadMore] = useState(false);

    return (
        <article className="single-tour">
            <img className="img" src={image} alt={name} />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>
                    {readMore ? (
                        <>
                            {info}
                            <button
                                type="button"
                                className="info-btn"
                                style={{ paddingLeft: ".5rem" }}
                                onClick={() => {
                                    setReadMore(false);
                                }}
                            >
                                read less
                            </button>
                        </>
                    ) : (
                        <>
                            {info.substring(0, 255)} ...
                            <button
                                type="button"
                                className="info-btn"
                                style={{ paddingLeft: ".5rem" }}
                                onClick={() => {
                                    setReadMore(true);
                                }}
                            >
                                read more
                            </button>
                        </>
                    )}
                </p>
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
