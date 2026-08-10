import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    ArrowRight,
    ArrowUpRight,
    Menu,
    X,
    ChevronDown,
} from "lucide-react";
import "./Landingpage.css";

export default function LandingPage() {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);

    const sectionsRef = useRef([]);

    /* ---------------------------------------------------------
       NAVBAR SCROLL STATE
    --------------------------------------------------------- */
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            setScrolled(window.scrollY > 40);

            sectionsRef.current.forEach((section) => {
                if (!section) return;

                const rect = section.getBoundingClientRect();

                if (
                    rect.top < window.innerHeight * 0.82 &&
                    rect.bottom > window.innerHeight * 0.18
                ) {
                    section.classList.add("is-visible");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    /* ---------------------------------------------------------
       SUBTLE MOUSE PARALLAX
    --------------------------------------------------------- */
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMouse({
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
            window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    /* ---------------------------------------------------------
       SCROLL TO SECTION
    --------------------------------------------------------- */
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setMenuOpen(false);
    };

    return (
        <main className="agora-page">
            <nav className={`agora-nav ${scrolled ? "nav-scrolled" : ""}`}>
                <div className="nav-inner">

                    <button
                        className="agora-logo"
                        onClick={() => scrollTo("hero")}
                    >
                        <span className="logo-mark">A</span>
                        <span>AGORA</span>
                    </button>

                    <div className="desktop-nav-links">
                        <button onClick={() => scrollTo("about")}>
                            About
                        </button>

                        <button onClick={() => scrollTo("philosophy")}>
                            Philosophy
                        </button>

                        <button onClick={() => scrollTo("network")}>
                            The Agora
                        </button>
                    </div>

                    <div className="desktop-nav-actions">
                        <button
                            className="nav-login"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>

                        <button
                            className="nav-join"
                            onClick={() => navigate("/signup")}
                        >
                            Join Agora
                            <ArrowUpRight size={15} />
                        </button>
                    </div>

                    <button
                        className="mobile-menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X /> : <Menu />}
                    </button>

                </div>

                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <button onClick={() => scrollTo("about")}>
                        About
                    </button>

                    <button onClick={() => scrollTo("philosophy")}>
                        Philosophy
                    </button>

                    <button onClick={() => scrollTo("network")}>
                        The Agora
                    </button>

                    <div className="mobile-menu-divider" />

                    <button
                        onClick={() =>
                            (window.location.href = "/login")
                        }
                    >
                        Login
                    </button>

                    <button
                        className="mobile-join"
                        onClick={() =>
                            (window.location.href = "/signup")
                        }
                    >
                        Join Agora
                        <ArrowUpRight size={16} />
                    </button>
                </div>
            </nav>

            <section
                id="hero"
                className="hero-section"
                ref={(el) => (sectionsRef.current[0] = el)}
            >

                {/* background atmosphere */}
                <div className="hero-noise" />
                <div className="hero-vignette" />

                <div
                    className="hero-orbit"
                    style={{
                        transform: `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`,
                    }}
                />

                <div
                    className="hero-glow"
                    style={{
                        transform: `translate(${mouse.x * -18}px, ${mouse.y * -12}px)`,
                    }}
                />

                {/* architectural columns */}
                <div
                    className="hero-column hero-column-left"
                    style={{
                        transform: `
            translateX(${mouse.x * -8}px)
            translateY(${scrollY * 0.25}px)
        `,
                    }}
                >
                    <div className="column-cap" />
                    <div className="column-body" />
                    <div className="column-base" />
                </div>

                <div
                    className="hero-column hero-column-right"
                    style={{
                        transform: `
            translateX(${mouse.x * 8}px)
            translateY(${scrollY * 0.15}px)
        `,
                    }}
                >
                    <div className="column-cap" />
                    <div className="column-body" />
                    <div className="column-base" />
                </div>

                <div className="hero-content">

                    <div className="hero-eyebrow">
                        <span className="eyebrow-line" />
                        <span>THE DIGITAL AGORA</span>
                        <span className="eyebrow-line" />
                    </div>

                    <h1>
                        <span className="hero-title-small">
                            ENTER THE
                        </span>

                        <span className="hero-title-main">
                            AGORA
                        </span>
                    </h1>

                    <p className="hero-description">
                        A place to connect. A place to discover. A place to shop.
                    </p>

                    <div className="hero-actions">

                        {/* <button
                            className="primary-cta"
                            onClick={() =>
                                (window.location.href = "/signup")
                            }
                        >
                            <span>Enter the Agora</span>
                            <ArrowRight size={18} />
                        </button>

                        <button
                            className="secondary-cta"
                            onClick={() => scrollTo("about")}
                        >
                            Discover Agora
                            <ChevronDown size={16} />
                        </button> */}

                    </div>

                </div>

                <div className="hero-bottom">

                    <div className="hero-scroll">
                        <span>SCROLL TO EXPLORE</span>
                        <div className="scroll-line">
                            <div />
                        </div>
                    </div>

                    <div className="hero-coordinate">
                        37°58′N &nbsp; 23°43′E
                    </div>

                </div>

            </section>


            <section
                id="about"
                className="about-section reveal-section"
                ref={(el) => (sectionsRef.current[1] = el)}
            >

                <div className="section-number">
                    01 / 04
                </div>

                <div className="about-layout">

                    <div className="about-heading">
                        <span className="section-kicker">
                            THE IDEA
                        </span>

                        <h2>
                            WHAT IS
                            <br />
                            <em>AGORA?</em>
                        </h2>
                    </div>

                    <div className="about-copy">

                        <p>
                            The Agora was once the heart of the city - a place
                            where people gathered, ideas were shared, and
                            merchants brought their goods to the community.
                        </p>

                        <p>
                            Agora brings that spirit into the digital world.
                            A place to connect with people, discover new things,
                            and shop from a community you can be part of.
                        </p>


                        <div className="about-signature">
                            <span>AGORA</span>
                            <small>
                                A PLACE FOR EXCHANGE
                            </small>
                        </div>

                    </div>

                </div>

                <div className="marble-divider">
                    <span />
                    <span className="diamond" />
                    <span />
                </div>

            </section>


            <section
                id="philosophy"
                className="transition-section reveal-section"
                ref={(el) => (sectionsRef.current[2] = el)}
            >

                <div className="section-number">
                    02 / 04
                </div>

                <div className="transition-header">

                    <span className="section-kicker">
                        FROM THEN TO NOW
                    </span>

                    <h2>
                        ANCIENT
                        <span>→</span>
                        DIGITAL
                    </h2>

                </div>

                <div className="transformation">

                    <div className="era era-ancient">

                        <span className="era-label">
                            THE ANCIENT AGORA
                        </span>

                        <div className="era-word">
                            PEOPLE
                        </div>

                        <div className="era-word">
                            GATHERING
                        </div>

                        <div className="era-word">
                            MARKETPLACE
                        </div>

                        <div className="era-word">
                            COMMUNITY
                        </div>


                    </div>

                    <div className="transformation-center">
                        <div className="vertical-line" />
                        <div className="center-symbol">
                            A
                        </div>
                        <div className="vertical-line" />
                    </div>

                    <div className="era era-digital">

                        <span className="era-label">
                            THE DIGITAL AGORA
                        </span>

                        <div className="era-word">
                            CONNECT
                        </div>

                        <div className="era-word">
                            DISCOVER
                        </div>

                        <div className="era-word">
                            SHOP
                        </div>

                        <div className="era-word">
                            COMMUNITY
                        </div>


                    </div>

                </div>

                <div className="philosophy-statement">

                    <span>THE PRINCIPLE REMAINS.</span>

                    <strong>
                        ONLY THE PLACE HAS CHANGED.
                    </strong>

                </div>

            </section>



            <section
                id="network"
                className="network-section reveal-section"
                ref={(el) => (sectionsRef.current[3] = el)}
            >

                <div className="section-number">
                    03 / 04
                </div>

                <div className="network-header">

                    <span className="section-kicker">
                        THE DIGITAL SQUARE
                    </span>

                    <h2>
                        CONNECT.
                        <br />
                        <em>DISCOVER. SHOP.</em>
                    </h2>

                </div>

                <div className="network-stage">

                    {/* connecting lines */}
                    <div className="network-line line-one" />
                    <div className="network-line line-two" />
                    <div className="network-line line-three" />
                    <div className="network-line line-four" />

                    {/* central node */}
                    <div className="network-core">

                        <div className="core-ring ring-one" />
                        <div className="core-ring ring-two" />

                        <div className="core-letter">
                            A
                        </div>

                        <span>AGORA</span>

                    </div>

                    {/* surrounding nodes */}
                    <div className="network-node node-people">
                        <div className="node-dot" />
                        <span>CONNECT</span>
                    </div>

                    <div className="network-node node-discovery">
                        <div className="node-dot" />
                        <span>DISCOVER</span>
                    </div>

                    <div className="network-node node-services">
                        <div className="node-dot" />
                        <span>SHOP</span>
                    </div>

                    <div className="network-node node-community">
                        <div className="node-dot" />
                        <span>COMMUNITY</span>
                    </div>

                </div>

                <p className="network-description">
                    Agora connects the pieces without
                    making the experience feel complicated.
                </p>

            </section>



            <section
                className="manifesto-section reveal-section"
                ref={(el) => (sectionsRef.current[4] = el)}
            >

                <div className="manifesto-background">
                    <span>ΑΓΟΡΑ</span>
                </div>

                <div className="manifesto-content">

                    <span className="section-kicker">
                        THE AGORA PRINCIPLE
                    </span>

                    <h2>
                        NOT JUST
                        <br />
                        A PLATFORM.
                    </h2>

                    <div className="manifesto-line" />

                    <p>
                        A place to meet.
                    </p>

                    <p>
                        A place to exchange.
                    </p>

                    <p>
                        A place to build.
                    </p>

                </div>

            </section>

            <section
                className="final-section reveal-section"
                ref={(el) => (sectionsRef.current[5] = el)}
            >

                <div className="final-architecture">

                    <div className="final-column left" />
                    <div className="final-column right" />

                    <div className="final-arch" />

                </div>

                <div className="final-content">

                    <span className="section-kicker">
                        YOUR PLACE AWAITS
                    </span>

                    <h2>
                        THE DIGITAL
                        <br />
                        <em>AGORA</em>
                        <br />
                        AWAITS.
                    </h2>

                    <p>
                        Create your account and enter the Agora.
                    </p>

                    <div className="final-actions">

                        <button
                            className="primary-cta large"
                            onClick={() =>
                                (window.location.href = "/signup")
                            }
                        >
                            <span>Create your account</span>
                            <ArrowRight size={19} />
                        </button>

                        <button
                            className="final-login"
                            onClick={() =>
                                navigate("/login")
                            }
                        >
                            Already a member?
                            <strong> Login</strong>
                        </button>


                        {/* <button
                            className="primary-cta large"
                            onClick={() =>
                                navigate("/seller-signup")
                            }
                        >
                            <span>Registering in as a new seller</span>
                            <ArrowRight size={19} />
                        </button> */}


                        <button
                            className="final-login"
                            onClick={() =>
                                navigate("/adminlogin")
                            }
                        >
                            Are you an admin?
                            <strong> Click here</strong>
                        </button>

                    </div>

                </div>

            </section>



            <footer className="agora-footer">

                <div className="footer-top">

                    <div className="footer-brand">

                        <div className="footer-logo">
                            <span>A</span>
                            AGORA
                        </div>

                        <p>
                            A digital place for everyone.
                        </p>

                    </div>

                    <div className="footer-links">

                        <button onClick={() => scrollTo("about")}>
                            About
                        </button>

                        <button onClick={() => scrollTo("philosophy")}>
                            Philosophy
                        </button>

                        <button onClick={() => scrollTo("network")}>
                            The Agora
                        </button>

                        <button
                            onClick={() =>
                                navigate("/login")
                            }
                        >
                            Login
                        </button>

                    </div>

                </div>

                <div className="footer-bottom">

                    <span>
                        © 2026 AGORA
                    </span>

                    <span>
                        BUILT FOR CONNECTION
                    </span>

                    <span>
                        ΑGORA
                    </span>

                </div>

            </footer>

        </main>
    );
}
