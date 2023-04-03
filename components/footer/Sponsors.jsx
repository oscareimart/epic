import Image from 'next/image'

const Sponsors = (props) => {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center">
                        <Image
                            src="https://web.epicbolivia.travel/tripadvisor_epic_1.webp"
                            width={150}
                            height={38}
                            alt="TripAdvisor"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center">
                        <Image
                            src="https://web.epicbolivia.travel/europassistance_epic.webp"
                            width={150}
                            height={38}
                            alt="TripAdvisor"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 d-flex justify-content-center">
                        <Image
                            src="https://web.epicbolivia.travel/marcapais_epic.webp"
                            width={150}
                            height={38}
                            alt="TripAdvisor"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sponsors
