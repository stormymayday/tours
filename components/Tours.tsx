import { TourType } from "@/types";
import Tour from "./Tour";

interface ToursPros {
    tours: TourType[];
    removeTour: (id: string) => void;
}

function Tours(props: ToursPros) {
    const { tours, removeTour } = props;

    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour) => {
                    return (
                        <Tour
                            key={tour.id}
                            tour={tour}
                            removeTour={removeTour}
                        />
                    );
                })}
            </div>
        </section>
    );
}
export default Tours;
