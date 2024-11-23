import { TourType } from "@/types";
import Tour from "./Tour";

interface ToursPros {
    tours: TourType[];
}

function Tours(props: ToursPros) {
    const { tours } = props;

    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    return <Tour key={tour.id} tour={tour} />;
                })}
            </div>
        </section>
    );
}
export default Tours;
