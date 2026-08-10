import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./UserHomeMain.css";

function UserHomeMain() {
    useEffect(() => {
        // console.log("cakked")
        document.getElementById("nav_home").classList.remove("user-nav-link");
        document.getElementById("nav_home").classList.add("user-nav-link", "active");
        document.getElementById("nav_discover").classList.remove("active");
        document.getElementById("nav_shop").classList.remove("active");
        document.getElementById("nav_community").classList.remove("active");
        document.getElementById("nav_oikos").classList.remove("active");
    }, [])

    return (
        <main className="agora-user-home">


            {/* =================================================
                HERO — THE DIGITAL SQUARE
            ================================================= */}

            <section className="agora-home-hero">

                <div className="hero-architecture"></div>

                <div className="hero-content">

                    <span className="hero-kicker">
                        THE DIGITAL AGORA
                    </span>

                    <h1>
                        WELCOME TO
                        <br />
                        <em>YOUR AGORA.</em>
                    </h1>

                    <p>
                        A place to connect.
                        <br />
                        A place to discover.
                        <br />
                        A place to shop.
                    </p>


                    <div className="hero-actions">

                        <Link
                            to="/shop"
                            className="hero-primary-button"
                        >
                            EXPLORE THE MARKET
                            <span>→</span>
                        </Link>

                        <Link
                            to="/user/user/discover"
                            className="hero-secondary-button"
                        >
                            DISCOVER
                        </Link>

                    </div>

                </div>


                {/* Decorative monument */}

                <div className="hero-monument">

                    <div className="monument-column column-left"></div>

                    <div className="monument-center">

                        <div className="monument-diamond">
                            <span>A</span>
                        </div>

                        <span>
                            AGORA
                        </span>

                    </div>

                    <div className="monument-column column-right"></div>

                </div>


                <div className="hero-scroll-indicator">

                    <span>SCROLL TO EXPLORE</span>

                    <div className="scroll-line"></div>

                </div>

            </section>



            {/* =================================================
                AGORA PULSE
            ================================================= */}

            <section className="agora-section agora-pulse">

                <div className="section-heading">

                    <div>

                        <span className="section-kicker">
                            WHAT'S HAPPENING
                        </span>

                        <h2>
                            THE AGORA
                            <br />
                            <em>IS MOVING.</em>
                        </h2>

                    </div>

                    <span className="section-index">
                        01 / 04
                    </span>

                </div>


                <div className="pulse-grid">

                    <article className="pulse-card pulse-large">

                        <span className="pulse-number">
                            01
                        </span>

                        <span className="pulse-label">
                            TRENDING NOW
                        </span>

                        <h3>
                            Discover what
                            <br />
                            people are exploring.
                        </h3>

                        <Link to="/user/user/discover">
                            EXPLORE →
                        </Link>

                    </article>


                    <article className="pulse-card">

                        <span className="pulse-number">
                            02
                        </span>

                        <span className="pulse-label">
                            NEW IN THE AGORA
                        </span>

                        <h3>
                            Fresh arrivals.
                            <br />
                            New possibilities.
                        </h3>

                        <Link to="/shop">
                            VIEW NEW →
                        </Link>

                    </article>


                    <article className="pulse-card">

                        <span className="pulse-number">
                            03
                        </span>

                        <span className="pulse-label">
                            COMMUNITY
                        </span>

                        <h3>
                            Conversations
                            <br />
                            are happening.
                        </h3>

                        <Link to="/community">
                            JOIN IN →
                        </Link>

                    </article>

                </div>

            </section>



            {/* =================================================
                FEATURED MARKETPLACE
            ================================================= */}

            <section className="agora-section agora-market">

                <div className="section-heading">

                    <div>

                        <span className="section-kicker">
                            FROM THE MARKET
                        </span>

                        <h2>
                            DISCOVER
                            <br />
                            <em>SOMETHING NEW.</em>
                        </h2>

                    </div>

                    <Link
                        to="/shop"
                        className="section-link"
                    >
                        VIEW MARKET →
                    </Link>

                </div>


                <div className="market-grid">

                    <article className="market-card market-card-featured">

                        <div className="market-image">
                            <span>OBJECT 01</span>
                        </div>

                        <div className="market-info">

                            <div>
                                <span>
                                    FEATURED
                                </span>

                                <h3>
                                    Contemporary Form
                                </h3>
                            </div>

                            <strong>
                                ₹2,400
                            </strong>

                        </div>

                    </article>


                    <article className="market-card">

                        <div className="market-image image-two">
                            <span>OBJECT 02</span>
                        </div>

                        <div className="market-info">

                            <div>
                                <span>
                                    DISCOVER
                                </span>

                                <h3>
                                    Crafted Collection
                                </h3>
                            </div>

                            <strong>
                                ₹1,850
                            </strong>

                        </div>

                    </article>


                    <article className="market-card">

                        <div className="market-image image-three">
                            <span>OBJECT 03</span>
                        </div>

                        <div className="market-info">

                            <div>
                                <span>
                                    NEW
                                </span>

                                <h3>
                                    Modern Essentials
                                </h3>
                            </div>

                            <strong>
                                ₹1,200
                            </strong>

                        </div>

                    </article>

                </div>

            </section>



            {/* =================================================
                DISCOVER
            ================================================= */}

            <section className="agora-section agora-discover">

                <div className="discover-intro">

                    <span className="section-kicker">
                        DISCOVERY
                    </span>

                    <h2>
                        THERE IS MORE
                        <br />
                        <em>TO EXPLORE.</em>
                    </h2>

                    <p>
                        Move beyond the familiar.
                        Explore places, ideas, products
                        and people shaping the Agora.
                    </p>

                    <Link
                        to="/user/user/discover"
                        className="text-arrow-link"
                    >
                        ENTER DISCOVERY
                        <span>↗</span>
                    </Link>

                </div>


                <div className="discover-orbit">

                    <div className="orbit-ring ring-one"></div>

                    <div className="orbit-ring ring-two"></div>

                    <div className="orbit-ring ring-three"></div>

                    <div className="orbit-center">
                        <span>A</span>
                    </div>

                    <div className="orbit-point point-one"></div>
                    <div className="orbit-point point-two"></div>
                    <div className="orbit-point point-three"></div>

                </div>

            </section>



            {/* =================================================
                COMMUNITY
            ================================================= */}

            <section className="agora-section agora-community">

                <div className="section-heading">

                    <div>

                        <span className="section-kicker">
                            THE PEOPLE
                        </span>

                        <h2>
                            THE AGORA
                            <br />
                            <em>IS PEOPLE.</em>
                        </h2>

                    </div>

                    <Link
                        to="/community"
                        className="section-link"
                    >
                        ENTER COMMUNITY →
                    </Link>

                </div>


                <div className="community-grid">

                    <article className="community-feature">

                        <span className="community-symbol">
                            ◇
                        </span>

                        <span className="community-label">
                            DISCUSSION
                        </span>

                        <h3>
                            What are you
                            discovering lately?
                        </h3>

                        <p>
                            48 people are talking
                            about this.
                        </p>

                        <Link to="/community">
                            JOIN CONVERSATION →
                        </Link>

                    </article>


                    <div className="community-list">

                        <div className="community-item">

                            <span>01</span>

                            <div>
                                <small>
                                    COMMUNITY
                                </small>

                                <h4>
                                    Share your latest find
                                </h4>
                            </div>

                            <b>→</b>

                        </div>


                        <div className="community-item">

                            <span>02</span>

                            <div>
                                <small>
                                    DISCUSSION
                                </small>

                                <h4>
                                    What makes a great product?
                                </h4>
                            </div>

                            <b>→</b>

                        </div>


                        <div className="community-item">

                            <span>03</span>

                            <div>
                                <small>
                                    PEOPLE
                                </small>

                                <h4>
                                    Meet the makers
                                </h4>
                            </div>

                            <b>→</b>

                        </div>

                    </div>

                </div>

            </section>



            {/* =================================================
                FINAL AGORA STATEMENT
            ================================================= */}

            <section className="agora-final">

                <div className="final-diamond">
                    A
                </div>

                <span>
                    THE DIGITAL AGORA
                </span>

                <h2>
                    CONNECT.
                    <br />
                    DISCOVER.
                    <br />
                    <em>SHOP.</em>
                </h2>

                <Link
                    to="/user/discover"
                    className="final-button"
                >
                    CONTINUE EXPLORING
                    <span>→</span>
                </Link>

            </section>


        </main>
    );
}

export default UserHomeMain;
