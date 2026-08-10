import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Discover.css";

function Discover() {

    useEffect(() => {
        // console.log("cakked")
        document.getElementById("nav_discover").classList.remove("user-nav-link");
        document.getElementById("nav_discover").classList.add("user-nav-link", "active");
        document.getElementById("nav_home").classList.remove("active");
        document.getElementById("nav_shop").classList.remove("active");
        document.getElementById("nav_community").classList.remove("active");
        document.getElementById("nav_oikos").classList.remove("active");
    }, [])

    const [activeCategory, setActiveCategory] = useState("ALL");

    const categories = [
        "ALL",
        "PRODUCTS",
        "PEOPLE",
        "PLACES",
        "IDEAS"
    ];

    const popularProducts = [
        {
            id: 1,
            category: "OBJECT",
            title: "Handcrafted Ceramic Set",
            creator: "Nikos Studio",
            price: "$84",
            symbol: "◇"
        },
        {
            id: 2,
            category: "OBJECT",
            title: "Minimal Brass Lamp",
            creator: "Atelier No. 7",
            price: "$126",
            symbol: "△"
        },
        {
            id: 3,
            category: "OBJECT",
            title: "Stone & Linen Collection",
            creator: "The Quiet House",
            price: "$92",
            symbol: "○"
        }
    ];

    const people = [
        {
            id: 1,
            name: "Elena",
            role: "Ceramic Artist",
            initial: "E",
            followers: "2.4K"
        },
        {
            id: 2,
            name: "Marcus",
            role: "Independent Creator",
            initial: "M",
            followers: "1.8K"
        },
        {
            id: 3,
            name: "Sophia",
            role: "Design Curator",
            initial: "S",
            followers: "4.1K"
        },
        {
            id: 4,
            name: "Alex",
            role: "Vintage Collector",
            initial: "A",
            followers: "1.2K"
        }
    ];

    const trending = [
        {
            number: "01",
            category: "PLACE",
            title: "The hidden courtyards of Athens",
            description:
                "A visual journey through quiet spaces, architecture and forgotten corners."
        },
        {
            number: "02",
            category: "IDEA",
            title: "Why people are choosing handmade again",
            description:
                "A growing appreciation for objects with character, history and human touch."
        },
        {
            number: "03",
            category: "PERSON",
            title: "Meet the makers behind Agora",
            description:
                "Independent creators building something different."
        }
    ];

    const worlds = [
        {
            title: "OBJECTS",
            description: "Things worth discovering.",
            symbol: "◇"
        },
        {
            title: "PEOPLE",
            description: "People worth knowing.",
            symbol: "○"
        },
        {
            title: "PLACES",
            description: "Places worth finding.",
            symbol: "△"
        },
        {
            title: "IDEAS",
            description: "Ideas worth exploring.",
            symbol: "✦"
        }
    ];

    return (
        <main className="agora-discover-page">

            {/* =================================================
                BACKGROUND
            ================================================= */}

            <div className="discover-grain"></div>

            <div className="discover-glow discover-glow-one"></div>
            <div className="discover-glow discover-glow-two"></div>


            {/* =================================================
                HERO
            ================================================= */}

            <section className="discover-hero">

                <div className="hero-orbit">

                    <div className="hero-orbit-ring hero-ring-one"></div>
                    <div className="hero-orbit-ring hero-ring-two"></div>
                    <div className="hero-orbit-ring hero-ring-three"></div>

                    <div className="hero-orbit-center">
                        A
                    </div>

                    <span className="hero-orbit-point hero-point-one"></span>
                    <span className="hero-orbit-point hero-point-two"></span>
                    <span className="hero-orbit-point hero-point-three"></span>

                </div>


                <div className="discover-hero-content">

                    <span className="discover-kicker">
                        THE DIGITAL AGORA · DISCOVERY
                    </span>

                    <h1>
                        DISCOVER
                        <br />
                        <em>THE UNEXPECTED.</em>
                    </h1>

                    <p>
                        Products, people, places and ideas
                        worth finding.
                    </p>

                    <button
                        className="discover-scroll-button"
                        onClick={() =>
                            window.scrollTo({
                                top: 650,
                                behavior: "smooth"
                            })
                        }
                    >
                        EXPLORE
                        <span>↓</span>
                    </button>

                </div>

            </section>


            {/* =================================================
                AGORA SELECT
            ================================================= */}

            <section className="agora-select-section">

                <div className="section-heading">

                    <div>
                        <span className="section-kicker">
                            CURATED BY AGORA
                        </span>

                        <h2>
                            AGORA
                            <br />
                            <em>SELECT.</em>
                        </h2>
                    </div>

                    <p>
                        A changing selection of things,
                        people and ideas we think deserve
                        your attention.
                    </p>

                </div>


                <article className="select-feature">

                    <div className="select-visual">

                        <div className="select-visual-symbol">
                            ◇
                        </div>

                        <span>
                            FEATURED DISCOVERY
                        </span>

                    </div>


                    <div className="select-content">

                        <span className="select-category">
                            EDITOR'S CHOICE
                        </span>

                        <h3>
                            OBJECTS
                            <br />
                            <em>WITH A STORY.</em>
                        </h3>

                        <p>
                            Discover objects created with
                            intention — from independent
                            makers, designers and artists
                            across the Agora.
                        </p>

                        <Link
                            to="/discover/select"
                            className="gold-arrow-link"
                        >
                            EXPLORE AGORA SELECT
                            <span>↗</span>
                        </Link>

                    </div>

                </article>

            </section>


            {/* =================================================
                DAILY POPULAR PRODUCTS
            ================================================= */}

            <section className="popular-section">

                <div className="section-heading compact">

                    <div>

                        <span className="section-kicker">
                            TODAY IN THE AGORA
                        </span>

                        <h2>
                            DAILY
                            <br />
                            <em>POPULAR.</em>
                        </h2>

                    </div>

                    <Link
                        to="/shop"
                        className="subtle-link"
                    >
                        VIEW SHOP
                        <span>↗</span>
                    </Link>

                </div>


                <div className="popular-grid">

                    {popularProducts.map(product => (

                        <article
                            className="discovery-product-card"
                            key={product.id}
                        >

                            <div className="product-card-visual">

                                <span className="product-symbol">
                                    {product.symbol}
                                </span>

                                <span className="product-card-category">
                                    {product.category}
                                </span>

                                <span className="product-card-number">
                                    0{product.id}
                                </span>

                            </div>


                            <div className="product-card-info">

                                <h3>
                                    {product.title}
                                </h3>

                                <p>
                                    {product.creator}
                                </p>

                                <div className="product-card-bottom">

                                    <span>
                                        {product.price}
                                    </span>

                                    <Link to={`/product/${product.id}`}>
                                        VIEW
                                        <span>↗</span>
                                    </Link>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
                FOUR WORLDS
            ================================================= */}

            <section className="worlds-section">

                <div className="worlds-heading">

                    <span className="section-kicker">
                        EXPLORE THE AGORA
                    </span>

                    <h2>
                        FOUR WORLDS.
                        <br />
                        <em>ENDLESS DISCOVERY.</em>
                    </h2>

                </div>


                <div className="worlds-grid">

                    {worlds.map((world, index) => (

                        <Link
                            to={`/discover/${world.title.toLowerCase()}`}
                            className="world-card"
                            key={world.title}
                        >

                            <span className="world-number">
                                0{index + 1}
                            </span>

                            <div className="world-symbol">
                                {world.symbol}
                            </div>

                            <div>

                                <h3>
                                    {world.title}
                                </h3>

                                <p>
                                    {world.description}
                                </p>

                            </div>

                            <span className="world-arrow">
                                ↗
                            </span>

                        </Link>

                    ))}

                </div>

            </section>


            {/* =================================================
                PEOPLE OF AGORA
            ================================================= */}

            <section className="people-section">

                <div className="section-heading compact">

                    <div>

                        <span className="section-kicker">
                            THE PEOPLE OF AGORA
                        </span>

                        <h2>
                            PEOPLE
                            <br />
                            <em>WORTH KNOWING.</em>
                        </h2>

                    </div>

                    <Link
                        to="/community"
                        className="subtle-link"
                    >
                        VIEW COMMUNITY
                        <span>↗</span>
                    </Link>

                </div>


                <div className="people-grid">

                    {people.map(person => (

                        <Link
                            to={`/profile/${person.id}`}
                            className="person-card"
                            key={person.id}
                        >

                            <div className="person-avatar">
                                {person.initial}
                            </div>

                            <div className="person-info">

                                <h3>
                                    {person.name}
                                </h3>

                                <p>
                                    {person.role}
                                </p>

                                <span>
                                    {person.followers} FOLLOWERS
                                </span>

                            </div>

                            <div className="person-arrow">
                                ↗
                            </div>

                        </Link>

                    ))}

                </div>

            </section>


            {/* =================================================
                TRENDING
            ================================================= */}

            <section className="trending-section">

                <div className="trending-header">

                    <span className="section-kicker">
                        WHAT PEOPLE ARE EXPLORING
                    </span>

                    <h2>
                        TRENDING
                        <br />
                        <em>THROUGH THE AGORA.</em>
                    </h2>

                </div>


                <div className="trending-list">

                    {trending.map(item => (

                        <article
                            className="trending-item"
                            key={item.number}
                        >

                            <span className="trending-number">
                                {item.number}
                            </span>

                            <span className="trending-category">
                                {item.category}
                            </span>

                            <div className="trending-main">

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                            <span className="trending-arrow">
                                ↗
                            </span>

                        </article>

                    ))}

                </div>

            </section>


            {/* =================================================
                DISCOVERY FILTER
            ================================================= */}

            <section className="explore-section">

                <div className="explore-heading">

                    <span className="section-kicker">
                        KEEP EXPLORING
                    </span>

                    <h2>
                        FIND SOMETHING
                        <br />
                        <em>INTERESTING.</em>
                    </h2>

                </div>


                <div className="discovery-filters">

                    {categories.map(category => (

                        <button
                            key={category}
                            className={
                                activeCategory === category
                                    ? "active"
                                    : ""
                            }
                            onClick={() =>
                                setActiveCategory(category)
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>


                <div className="discovery-search">

                    <span>
                        ◇
                    </span>

                    <input
                        type="text"
                        placeholder="WHAT ARE YOU CURIOUS ABOUT?"
                    />

                    <button>
                        ↗
                    </button>

                </div>

            </section>


            {/* =================================================
                SURPRISE ME
            ================================================= */}

            <section className="surprise-section">

                <div className="surprise-orbit">

                    <div></div>
                    <div></div>
                    <div></div>

                    <span>
                        A
                    </span>

                </div>


                <div className="surprise-content">

                    <span className="section-kicker">
                        NOT SURE WHERE TO START?
                    </span>

                    <h2>
                        SURPRISE
                        <br />
                        <em>ME.</em>
                    </h2>

                    <p>
                        Let Agora choose something
                        unexpected for you.
                    </p>

                    <button className="surprise-button">
                        SHOW ME SOMETHING
                        <span>↗</span>
                    </button>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="discover-final">

                <span className="section-kicker">
                    THE AGORA IS ALWAYS CHANGING
                </span>

                <h2>
                    KEEP
                    <br />
                    <em>LOOKING.</em>
                </h2>

                <p>
                    There is always something new
                    waiting to be discovered.
                </p>

            </section>

        </main>
    );
}

export default Discover;
