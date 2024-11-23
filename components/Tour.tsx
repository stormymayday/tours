import { TourType } from "@/types";
import Image from "next/image";

interface TourProps {
    tour: TourType;
    removeTour: (id: string) => void;
}

function Tour(props: TourProps) {
    const { id, image, info, name, price } = props.tour;
    const { removeTour } = props;

    return (
        <article className="single-tour">
            <Image
                src={image}
                alt={name}
                width={700}
                height={400}
                className="img"
            />
            <span className="tour-price">${price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{info}</p>
                <button
                    type="button"
                    className="btn btn-block delete-btn"
                    onClick={() => {
                        removeTour(id);
                    }}
                >
                    not interested
                </button>
            </div>
        </article>
    );
}
export default Tour;
