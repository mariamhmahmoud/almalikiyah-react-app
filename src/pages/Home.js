import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/almalikiyah.png"

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="container col-xxl-8 px-4 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-5 fw-bold lh-1 mb-3">AlMalikiyah Charitable Society</h1>
                            <p className="lead">AlMalikiyah Charitable Society is a U.S public charity established in 2022. Our mission is to support and help the families and individuals that are in dire need wherever possible especially in Lebanon due to the deteriorating political turbulence since 1975. There are thousands of Lebanese have been affected due to the war. Malikeyeh  foundation US works closely with its sister organization in Lebanon which was established in 2022 and has been the pioneer in supporting this cause since its inception.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a className="btn btn-success btn-lg px-4 me-md-2" href="/join">Join Us</a>
                                <a className="btn btn-warning btn-lg px-4" href="/donate">Donate</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>


    )
}

export default Home;