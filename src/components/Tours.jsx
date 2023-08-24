import Tour from "./Tour.jsx";

const Tours = ({ tours }) => {

    console.log(tours);

    return (
        <section>
            <div className="title">
                <h2>our tours</h2>
                <div className="title-underline"></div>
            </div>
            <div className="tours">
                {
                    tours ? (

                        tours.map((tour) => {
                            return (
                                <Tour key={tour.id} {...tour} />
                            );
                        })

                    ) : (
                        null
                    )
                }
            </div>
        </section>
    );
}

export default Tours;