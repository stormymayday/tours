"use client";

import { useState } from "react";
import { TourType } from "@/types";
import Image from "next/image";

interface TourProps {
    tour: TourType;
    removeTour: (id: string) => void;
}

function Tour(props: TourProps) {
    const { id, image, info, name, price } = props.tour;
    const { removeTour } = props;

    const [readMore, setReadMore] = useState(false);

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
                <p>
                    {readMore ? info : `${info.substring(0, 200)} ...`}
                    <button
                        type="button"
                        className="info-btn"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? "show less" : "read more"}
                    </button>
                </p>
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
