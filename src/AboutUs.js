import './css/aboutus.css';

function AboutUs() {
    return (
        <article>
            <h1 className="abtitle">About GALAXY</h1>
            <p className="abtext">
                Welcome to <strong>GALAXY</strong> online game selling website!
                Trying to find the cheapest and integrated games?
                Looking for the best gaming experience?
                Finding for the best and most suitable game styles for yourself?
                Here GALAXY, is the best platform for you to find your lovely game with the most suitable price!
            </p>
            <p className="abtext">
                GALAXY launched in 2023, it is a platform tailored for the region, providing customers
                the best gaming experience through providing perfect games performance and fulfillment support.
            </p>
            <p className="abtext">
                Our platform is user-friendly, easy to navigate, and designed to make your shopping experience as hassle-free as possible.
                With our intuitive search and filtering tools, you can quickly find the games you want and browse through reviews
                and ratings from other gamers to make an informed decision.
            </p>
            <p className="abtext">
                We all believe that gaming should be enjoyable and relaxable. This is the wish of all 3
                staff in GALAXT aspires to deliver on the platform every single day.
            </p>
            <p className="abtext">
                So why wait? Start browsing our extensive catalog of games today and find your next favorite title!
            </p>

            <div id="flex">
                <div className="about-card">
                    <h2 className="cardtopic">Our Purpose</h2>
                    <div>
                        <img src="../img/aboutus/purpose.png" alt="USER EXPERINCE" width="386" height="265" />
                        <div >
                            <h3>User Experience</h3>
                        </div>
                    </div>
                    <p>
                        We believe that the games categories and  platform performance will provide the
                        best user experience to everyone.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="cardtopic">Our Target</h2>
                    <div>
                        <img src="../img/aboutus/target.png" alt="RELAXABLE" width="386" height="265" />
                        <div>
                            <h3>Relaxable</h3>
                        </div>
                    </div>
                    <p>
                        We hope that everyone who using our platform will be able to have the best gaming
                        experience and felt relax in their stressful period.
                    </p>
                </div>

                <div className="about-card">
                    <h2 className="cardtopic">Our Personality</h2>
                    <div id="polaroid">
                        <img src="../img/aboutus/personality.png" alt="FRIENDLY" width="386" height="265" />
                        <div id="container">
                            <h3>Friendly</h3>
                        </div>
                    </div>
                    <p>
                        We will serve every customer that comes from a different country with different skin color
                        who has a mind to buy the games with the most friendly service.
                    </p>
                </div>
            </div>

            <br /><br /><br />
            <h1 className="abteamtitle">Our Team</h1>

            <div className="team">
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="../img/aboutus/zhongren.png" className="img-fluid rounded-start" alt="LAU ZHONG REN" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Mr. LAU ZHONG REN</h5>
                                <p className="card-text">
                                    Dear valued customers, thank you for choosing us  for purchasing games.
                                    We look forward to continuing to serve you with exceptional service.
                                </p>
                                <p className="card-text"><small className="text-body-secondary"><strong>Email: </strong>lauzr-wm21@student.tarc.edu.my</small></p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Add other team members */}
            </div>
        </article>
    )
}

export default AboutUs;
