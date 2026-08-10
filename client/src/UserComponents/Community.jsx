import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Community.css";

function Community() {
    useEffect(() => {
        // console.log("cakked")
        document.getElementById("nav_community").classList.remove("user-nav-link");
        document.getElementById("nav_community").classList.add("user-nav-link", "active");
        document.getElementById("nav_discover").classList.remove("active");
        document.getElementById("nav_shop").classList.remove("active");
        document.getElementById("nav_home").classList.remove("active");
        document.getElementById("nav_oikos").classList.remove("active");
    }, [])


    const [activeCircle, setActiveCircle] = useState("ALL");

    const circles = [
        "ALL",
        "TECHNOLOGY",
        "DESIGN",
        "BOOKS",
        "FASHION",
        "BUSINESS",
        "LIFESTYLE"
    ];

    const discussions = [
        {
            id: 1,
            user: "Aarav",
            initial: "A",
            time: "12 MIN AGO",
            circle: "TECHNOLOGY",
            title: "What technology do you think will change everyday life next?",
            text: "We've seen AI move incredibly fast. I'm curious what everyone thinks comes next beyond the obvious...",
            replies: 34,
            likes: 128,
            trending: true
        },
        {
            id: 2,
            user: "Meera",
            initial: "M",
            time: "28 MIN AGO",
            circle: "DESIGN",
            title: "Does good design need to be noticed?",
            text: "I've been thinking about whether the best interfaces are actually the ones users barely notice.",
            replies: 19,
            likes: 76,
            trending: false
        },
        {
            id: 3,
            user: "Kabir",
            initial: "K",
            time: "1 HR AGO",
            circle: "BOOKS",
            title: "What book completely changed the way you think?",
            text: "Looking for something that stays with you long after you've finished reading it.",
            replies: 51,
            likes: 214,
            trending: true
        },
        {
            id: 4,
            user: "Ishita",
            initial: "I",
            time: "2 HRS AGO",
            circle: "LIFESTYLE",
            title: "What is one thing you stopped buying?",
            text: "Trying to become more intentional about what I actually bring into my life.",
            replies: 27,
            likes: 91,
            trending: false
        }
    ];

    const filteredDiscussions =
        activeCircle === "ALL"
            ? discussions
            : discussions.filter(
                discussion =>
                    discussion.circle === activeCircle
            );

    return (

        <main className="agora-community">

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="community-grain"></div>

            <div className="community-orbit community-orbit-one"></div>
            <div className="community-orbit community-orbit-two"></div>


            {/* =========================================
                HEADER
            ========================================= */}

            <section className="community-header">

                <div className="community-header-content">

                    <span className="section-kicker">
                        THE DIGITAL SQUARE
                    </span>

                    <h1>
                        THE SQUARE
                        <br />
                        <em>IS OPEN.</em>
                    </h1>

                    <p>
                        Conversations, questions, ideas and
                        people. Step into the living side of
                        the Agora.
                    </p>

                </div>


                <div className="community-header-symbol">

                    <div className="community-orbit-ring ring-one"></div>
                    <div className="community-orbit-ring ring-two"></div>
                    <div className="community-orbit-ring ring-three"></div>

                    <div className="community-orbit-center">
                        A
                    </div>

                    <span className="community-orbit-point point-one"></span>
                    <span className="community-orbit-point point-two"></span>
                    <span className="community-orbit-point point-three"></span>

                </div>

            </section>


            {/* =========================================
                COMMUNITY PULSE
            ========================================= */}

            <section className="community-pulse">

                <div className="pulse-item">

                    <span className="pulse-number">
                        2,481
                    </span>

                    <span className="pulse-label">
                        PEOPLE IN THE AGORA
                    </span>

                </div>


                <div className="pulse-divider"></div>


                <div className="pulse-item">

                    <span className="pulse-number">
                        347
                    </span>

                    <span className="pulse-label">
                        ACTIVE DISCUSSIONS
                    </span>

                </div>


                <div className="pulse-divider"></div>


                <div className="pulse-item">

                    <span className="pulse-number">
                        28
                    </span>

                    <span className="pulse-label">
                        NEW TODAY
                    </span>

                </div>


                <div className="pulse-live">

                    <span className="live-dot"></span>

                    LIVE

                </div>

            </section>


            {/* =========================================
                START DISCUSSION
            ========================================= */}

            <section className="start-discussion">

                <div className="start-content">

                    <span className="section-kicker">
                        YOUR VOICE
                    </span>

                    <h2>
                        HAVE SOMETHING
                        <br />
                        <em>TO SAY?</em>
                    </h2>

                    <p>
                        Start a conversation. Ask a question.
                        Share an idea. Someone in the Agora
                        might be waiting for exactly that.
                    </p>

                </div>


                <Link
                    to="/community/create"
                    className="start-button"
                >
                    START A DISCUSSION
                    <span>↗</span>
                </Link>

            </section>


            {/* =========================================
                CIRCLES
            ========================================= */}

            <section className="community-circles">

                <div className="circle-heading">

                    <div>

                        <span className="section-kicker">
                            FIND YOUR PEOPLE
                        </span>

                        <h2>
                            AGORA
                            <br />
                            <em>CIRCLES.</em>
                        </h2>

                    </div>

                    <span className="circle-count">
                        {circles.length - 1} ACTIVE CIRCLES
                    </span>

                </div>


                <div className="circle-list">

                    {circles.map(circle => (

                        <button
                            key={circle}
                            type="button"
                            onClick={() =>
                                setActiveCircle(circle)
                            }
                            className={
                                activeCircle === circle
                                    ? "circle-button active"
                                    : "circle-button"
                            }
                        >

                            <span className="circle-symbol">
                                ◇
                            </span>

                            {circle}

                        </button>

                    ))}

                </div>

            </section>


            {/* =========================================
                DISCUSSIONS
            ========================================= */}

            <section className="discussion-section">

                <div className="discussion-heading">

                    <div>

                        <span className="section-kicker">
                            FROM THE SQUARE
                        </span>

                        <h2>
                            WHAT PEOPLE
                            <br />
                            <em>ARE SAYING.</em>
                        </h2>

                    </div>

                    <span className="discussion-count">
                        {filteredDiscussions.length} DISCUSSIONS
                    </span>

                </div>


                <div className="discussion-layout">

                    <div className="discussion-feed">

                        {filteredDiscussions.map(discussion => (

                            <article
                                className="discussion-card"
                                key={discussion.id}
                            >

                                <div className="discussion-top">

                                    <div className="discussion-user">

                                        <div className="discussion-avatar">
                                            {discussion.initial}
                                        </div>

                                        <div>

                                            <strong>
                                                {discussion.user}
                                            </strong>

                                            <span>
                                                {discussion.time}
                                            </span>

                                        </div>

                                    </div>


                                    {discussion.trending && (

                                        <span className="trending-label">
                                            TRENDING
                                        </span>

                                    )}

                                </div>


                                <span className="discussion-circle">
                                    {discussion.circle}
                                </span>


                                <h3>
                                    {discussion.title}
                                </h3>


                                <p>
                                    {discussion.text}
                                </p>


                                <div className="discussion-bottom">

                                    <div className="discussion-stats">

                                        <span>
                                            ♢ {discussion.likes}
                                        </span>

                                        <span>
                                            ◇ {discussion.replies} REPLIES
                                        </span>

                                    </div>


                                    <button
                                        className="join-discussion"
                                        type="button"
                                    >
                                        JOIN
                                        <span>→</span>
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>


                    {/* =================================
                        RIGHT SIDEBAR
                    ================================= */}

                    <aside className="community-sidebar">

                        <div className="sidebar-block">

                            <span className="sidebar-kicker">
                                NOW IN THE AGORA
                            </span>

                            <h3>
                                PEOPLE
                                <br />
                                <em>TO MEET.</em>
                            </h3>


                            <div className="people-list">

                                <div className="person-row">

                                    <div className="person-avatar">
                                        R
                                    </div>

                                    <div className="person-info">

                                        <strong>
                                            Rohan
                                        </strong>

                                        <span>
                                            DESIGN · 12 DISCUSSIONS
                                        </span>

                                    </div>

                                    <span className="online-dot"></span>

                                </div>


                                <div className="person-row">

                                    <div className="person-avatar">
                                        S
                                    </div>

                                    <div className="person-info">

                                        <strong>
                                            Sara
                                        </strong>

                                        <span>
                                            BOOKS · 8 DISCUSSIONS
                                        </span>

                                    </div>

                                    <span className="online-dot"></span>

                                </div>


                                <div className="person-row">

                                    <div className="person-avatar">
                                        V
                                    </div>

                                    <div className="person-info">

                                        <strong>
                                            Vikram
                                        </strong>

                                        <span>
                                            TECHNOLOGY · 21 DISCUSSIONS
                                        </span>

                                    </div>

                                    <span className="online-dot"></span>

                                </div>

                            </div>


                            <Link
                                to="/community/people"
                                className="sidebar-link"
                            >
                                EXPLORE PEOPLE
                                <span>↗</span>
                            </Link>

                        </div>


                        <div className="sidebar-block trending-block">

                            <span className="sidebar-kicker">
                                CONVERSATIONS
                            </span>

                            <h3>
                                TRENDING
                                <br />
                                <em>NOW.</em>
                            </h3>


                            <div className="trending-topic">

                                <span>
                                    01
                                </span>

                                <strong>
                                    THE FUTURE OF AI
                                </strong>

                            </div>


                            <div className="trending-topic">

                                <span>
                                    02
                                </span>

                                <strong>
                                    MINIMALISM
                                </strong>

                            </div>


                            <div className="trending-topic">

                                <span>
                                    03
                                </span>

                                <strong>
                                    BEST BOOKS OF 2026
                                </strong>

                            </div>


                            <div className="trending-topic">

                                <span>
                                    04
                                </span>

                                <strong>
                                    BUILDING ONLINE
                                </strong>

                            </div>

                        </div>

                    </aside>

                </div>

            </section>


            {/* =========================================
                COMMUNITY CTA
            ========================================= */}

            <section className="community-cta">

                <div className="cta-symbol">
                    ◇
                </div>

                <span className="section-kicker">
                    THE AGORA BELONGS TO EVERYONE
                </span>

                <h2>
                    DON'T JUST
                    <br />
                    <em>WATCH.</em>
                </h2>

                <p>
                    Add your voice to the square.
                </p>

                <Link
                    to="/community/create"
                    className="cta-button"
                >
                    JOIN THE CONVERSATION
                    <span>→</span>
                </Link>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="community-footer">

                <span>
                    THE DIGITAL AGORA
                </span>

                <span>
                    CONNECT · DISCUSS · BELONG
                </span>

                <span>
                    AGORA © 2026
                </span>

            </footer>

        </main>
    );
}

export default Community;
