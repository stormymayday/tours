import { TourType } from "@/types";
import Image from "next/image";

interface TourProps {
    tour: TourType;
}

function Tour(props: TourProps) {
    const { image, info, name, price } = props.tour;

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
            </div>
        </article>
    );
}
export default Tour;
