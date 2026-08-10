import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {

    useEffect(() => {
        // console.log("cakked")
        document.getElementById("nav_shop").classList.remove("user-nav-link");
        document.getElementById("nav_shop").classList.add("user-nav-link", "active");
        document.getElementById("nav_discover").classList.remove("active");
        document.getElementById("nav_home").classList.remove("active");
        document.getElementById("nav_community").classList.remove("active");
        document.getElementById("nav_oikos").classList.remove("active");
    }, [])

    const [activeCategory, setActiveCategory] = useState("ALL");

    const categories = [
        "ALL",
        "TECH",
        "FASHION",
        "HOME",
        "BOOKS",
        "ART",
        "COLLECTIBLES"
    ];

    const products = [
        {
            id: 1,
            name: "Mechanical Keyboard",
            seller: "Arjun",
            price: "₹4,500",
            category: "TECH",
            condition: "LIKE NEW",
            location: "Delhi"
        },
        {
            id: 2,
            name: "Vintage Camera",
            seller: "Meera",
            price: "₹8,200",
            category: "COLLECTIBLES",
            condition: "USED",
            location: "Mumbai"
        },
        {
            id: 3,
            name: "Minimal Desk Lamp",
            seller: "Rohan",
            price: "₹1,800",
            category: "HOME",
            condition: "NEW",
            location: "Bangalore"
        },
        {
            id: 4,
            name: "Classic Denim Jacket",
            seller: "Aarav",
            price: "₹2,400",
            category: "FASHION",
            condition: "LIKE NEW",
            location: "Gurgaon"
        },
        {
            id: 5,
            name: "The Art of War",
            seller: "Kabir",
            price: "₹650",
            category: "BOOKS",
            condition: "GOOD",
            location: "Jaipur"
        },
        {
            id: 6,
            name: "Handmade Ceramic Vase",
            seller: "Ishita",
            price: "₹1,250",
            category: "ART",
            condition: "NEW",
            location: "Pune"
        }
    ];

    const filteredProducts =
        activeCategory === "ALL"
            ? products
            : products.filter(
                product => product.category === activeCategory
            );

    return (
        <main className="agora-shop">

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="shop-grain"></div>

            <div className="shop-orbit shop-orbit-one"></div>
            <div className="shop-orbit shop-orbit-two"></div>


            {/* =========================================
                HEADER
            ========================================= */}

            <section className="shop-header">

                <div className="shop-header-content">

                    <span className="section-kicker">
                        THE AGORA MARKET
                    </span>

                    <h1>
                        FIND SOMETHING
                        <br />
                        <em>WORTH DISCOVERING.</em>
                    </h1>

                    <p>
                        Explore things people love, discover
                        something unexpected, or give something
                        you own a new home.
                    </p>

                </div>


                <div className="shop-header-actions">

                    <Link
                        to="/sell"
                        className="sell-item-button"
                    >
                        <span>SELL AN ITEM</span>
                        <span>↗</span>
                    </Link>

                </div>

            </section>


            {/* =========================================
                SEARCH
            ========================================= */}

            <section className="shop-search-section">

                <div className="shop-search">

                    <span className="shop-search-icon">
                        ⌕
                    </span>

                    <input
                        type="text"
                        placeholder="Search the Agora..."
                    />

                    <span className="search-shortcut">
                        /
                    </span>

                </div>

            </section>


            {/* =========================================
                CATEGORY NAVIGATION
            ========================================= */}

            <section className="shop-categories">

                <div className="category-label">
                    EXPLORE
                </div>

                <div className="category-list">

                    {categories.map(category => (

                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory(category)
                            }
                            className={
                                activeCategory === category
                                    ? "category-button active"
                                    : "category-button"
                            }
                        >
                            {category}
                        </button>

                    ))}

                </div>

            </section>


            {/* =========================================
                FEATURED MARKET
            ========================================= */}

            <section className="featured-market">

                <div className="featured-heading">

                    <div>

                        <span className="section-kicker">
                            CURATED BY AGORA
                        </span>

                        <h2>
                            TODAY'S
                            <br />
                            <em>SELECTION.</em>
                        </h2>

                    </div>

                    <span className="featured-number">
                        01 — 06
                    </span>

                </div>


                <div className="featured-product">

                    <div className="featured-image">

                        <div className="featured-image-mark">
                            A
                        </div>

                        <span className="featured-image-label">
                            FEATURED OBJECT
                        </span>

                    </div>


                    <div className="featured-info">

                        <span className="product-category">
                            AGORA SELECT · TECH
                        </span>

                        <h3>
                            Mechanical
                            <br />
                            Keyboard
                        </h3>

                        <p>
                            A carefully selected piece from
                            one of Agora's community sellers.
                            Built for people who appreciate
                            thoughtful design.
                        </p>


                        <div className="featured-meta">

                            <div>
                                <span>SELLER</span>
                                <strong>ARJUN</strong>
                            </div>

                            <div>
                                <span>CONDITION</span>
                                <strong>LIKE NEW</strong>
                            </div>

                            <div>
                                <span>LOCATION</span>
                                <strong>DELHI</strong>
                            </div>

                        </div>


                        <div className="featured-bottom">

                            <strong className="featured-price">
                                ₹4,500
                            </strong>

                            <button className="view-product-button">
                                VIEW ITEM
                                <span>→</span>
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================
                PRODUCT GRID
            ========================================= */}

            <section className="product-section">

                <div className="product-section-heading">

                    <div>

                        <span className="section-kicker">
                            FROM THE COMMUNITY
                        </span>

                        <h2>
                            JUST
                            <br />
                            <em>LISTED.</em>
                        </h2>

                    </div>

                    <span className="product-count">
                        {filteredProducts.length} OBJECTS
                    </span>

                </div>


                <div className="product-grid">

                    {filteredProducts.map(product => (

                        <article
                            className="product-card"
                            key={product.id}
                        >

                            <div className="product-image">

                                <button
                                    className="favorite-button"
                                    type="button"
                                >
                                    ♢
                                </button>

                                <div className="product-image-letter">
                                    A
                                </div>

                                <span className="condition-badge">
                                    {product.condition}
                                </span>

                            </div>


                            <div className="product-card-content">

                                <span className="product-category">
                                    {product.category}
                                </span>

                                <h3>
                                    {product.name}
                                </h3>


                                <div className="product-seller">

                                    <div className="seller-avatar">
                                        {product.seller.charAt(0)}
                                    </div>

                                    <div>

                                        <span>
                                            SOLD BY
                                        </span>

                                        <strong>
                                            {product.seller}
                                        </strong>

                                    </div>

                                </div>


                                <div className="product-bottom">

                                    <strong>
                                        {product.price}
                                    </strong>

                                    <button
                                        className="product-arrow"
                                        type="button"
                                    >
                                        →
                                    </button>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =========================================
                SELL CTA
            ========================================= */}

            <section className="sell-section">

                <div className="sell-decoration">
                    ◇
                </div>

                <div className="sell-content">

                    <span className="section-kicker">
                        YOUR TURN
                    </span>

                    <h2>
                        HAVE SOMETHING
                        <br />
                        <em>TO OFFER?</em>
                    </h2>

                    <p>
                        Agora isn't only a place to buy.
                        It's a place to exchange.
                        List something you own and let
                        someone else discover it.
                    </p>

                    <Link
                        to="/sell"
                        className="sell-main-button"
                    >
                        START SELLING
                        <span>↗</span>
                    </Link>

                </div>


                <div className="sell-symbol">

                    <div className="sell-ring ring-a"></div>
                    <div className="sell-ring ring-b"></div>

                    <div className="sell-center">
                        A
                    </div>

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="shop-footer">

                <span>
                    THE DIGITAL AGORA
                </span>

                <span>
                    BUY · SELL · DISCOVER
                </span>

                <span>
                    AGORA © 2026
                </span>

            </footer>

        </main>
    );
}

export default Shop;
