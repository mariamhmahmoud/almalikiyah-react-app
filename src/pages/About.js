import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            < Navbar />
            <div class="jumbotron">
                <div class="container">
                    <h1 class="display-3">About Us</h1>
                    <p>AlMalikiyah Charitable Society is a U.S public charity established in 2022. Our mission is to support and help the families and individuals that are in dire need wherever possible especially in Lebanon due to the deteriorating political turbulence since 1975. There are thousands of Lebanese have been affected due to the war. Malikeyeh foundation US works closely with its sister organization in Lebanon which was established in 2022 and has been the pioneer in supporting this cause since its inception.</p>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2>Our Vision</h2>
                        <p>To be a global leader in offering assistance to the provide support for people in need to battle the difficulty of life.</p>
                    </div>
                    <div class="col-md-4">
                        <h2>Our Mission</h2>
                        <p>Help and provide assistance to families and individuals who are  identified and known to be in need for assistance and were affected due to the war or natural disasters and other causes. Ultimately, our goal is to spread our message on a global level to draw support to our mission from a compassionate global community. In addition, we seek to advocate with the government, local and international humanitarian organizations, and philanthropists to take on the responsibility of caring for orphans and their families. </p>
                    </div>
                    <div class="col-md-4">
                        <h2>Our Goals</h2>
                        <ul>
                            <li>To care for, sponsor, nurture, educate, and develop individuals that have been orphaned due to war, terrorism, natural disasters, or other causes.</li>
                            <li>To care for the destitute, disabled, and displaced due to war, terrorism, natural disasters, or other causes.</li>
                            <li>To provide social services, care, and assistance to those in need.</li>
                            <li>To perform all other activities permitted under the internal revenue code in furtherance of the organization’s purpose and stated objectives.</li>
                        </ul>
                    </div>
                </div>

                <hr />

            </div>
            <Footer />
        </div>
    )
}

export default About;