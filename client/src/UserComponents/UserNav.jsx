import { Link, useNavigate } from "react-router-dom";
import "./UserNavbar.css";

function UserNav() {

    const navigate = useNavigate();

    function handleLogout() {
        navigate("/");
    }

    return (
        <>
            {/* =================================================
                DESKTOP NAVBAR
            ================================================= */}

            <nav className="agora-user-navbar">

                {/* LEFT — LOGO */}

                <Link
                    to="/user"
                    className="user-nav-brand"
                >

                    <div className="user-nav-logo-frame">
                        <span>A</span>
                    </div>

                    <div className="user-nav-brand-name">
                        AGORA
                    </div>

                </Link>


                {/* CENTER — NAVIGATION */}

                <div className="user-nav-links">

                    <Link
                        id="nav_home"
                        style={{ fontSize: "12px" }}
                        to="/user"
                        className="user-nav-link active"
                    >
                        HOME
                    </Link>

                    <Link
                        id="nav_discover"
                        style={{ fontSize: "12px" }}
                        to="/user/discover"
                        className="user-nav-link"
                    >
                        DISCOVER
                    </Link>

                    <Link
                        id="nav_shop"
                        style={{ fontSize: "12px" }}
                        to="/user/shop"
                        className="user-nav-link"
                    >
                        SHOP
                    </Link>

                    <Link
                        id="nav_community"
                        style={{ fontSize: "12px" }}
                        to="/user/community"
                        className="user-nav-link"
                    >
                        COMMUNITY
                    </Link>

                    <Link
                        id="nav_oikos"
                        style={{ fontSize: "12px" }}
                        to="/user/oikos"
                        className="user-nav-link"
                    >
                        OIKOS
                        {/* your personal space */}
                    </Link>

                </div>


                {/* RIGHT — ACTIONS */}

                <div className="user-nav-actions">

                    {/* Search */}

                    <button
                        className="user-nav-icon"
                        type="button"
                        aria-label="Search"
                    >
                        <span className="search-symbol"></span>
                    </button>


                    {/* Notifications */}

                    <button
                        className="user-nav-icon notification-button"
                        type="button"
                        aria-label="Notifications"
                    >

                        <span className="notification-symbol">
                            ◇
                        </span>

                        <span className="notification-dot"></span>

                    </button>


                    {/* Profile */}

                    <Link
                        to="/profile"
                        className="user-nav-profile"
                    >

                        <div
                            style={{ fontSize: "12px" }}
                            className="profile-initial">
                            H
                        </div>

                        <span
                            style={{ fontSize: "12px" }}
                            className="profile-arrow">
                            ↓
                        </span>

                    </Link>


                    {/* Logout */}

                    <button
                        style={{ fontSize: "12px" }}
                        className="user-nav-logout"
                        onClick={handleLogout}
                        type="button"
                    >
                        EXIT
                    </button>

                </div>

            </nav>


            {/* =================================================
                MOBILE NAVBAR
            ================================================= */}

            <nav className="agora-mobile-navbar">

                {/* HOME */}

                <Link
                    to="/user"
                    className="mobile-nav-item active"
                >

                    <span className="mobile-nav-icon">
                        ⌂
                    </span>

                    <span style={{ fontSize: "8px" }} className="mobile-nav-label">
                        HOME
                    </span>

                </Link>


                {/* DISCOVER */}

                <Link
                    to="/discover"
                    className="mobile-nav-item"
                >

                    <span className="mobile-nav-icon">
                        ◇
                    </span>

                    <span style={{ fontSize: "8px" }} className="mobile-nav-label">
                        DISCOVER
                    </span>

                </Link>


                {/* SHOP */}

                <Link
                    to="/shop"
                    className="mobile-nav-shop"
                >

                    <div className="mobile-shop-logo">
                        A
                    </div>

                    <span >
                        SHOP
                    </span>

                </Link>


                {/* COMMUNITY */}

                <Link
                    to="/community"
                    className="mobile-nav-item"
                >

                    <span className="mobile-nav-icon">
                        ○
                    </span>

                    <span style={{ fontSize: "8px" }} className="mobile-nav-label">
                        COMMUNITY
                    </span>

                </Link>


                {/* PROFILE */}

                <Link
                    to="/profile"
                    className="mobile-nav-item"
                >

                    <span className="mobile-profile-circle">
                        H
                    </span>

                    <span style={{ fontSize: "8px" }} className="mobile-nav-label">
                        PROFILE
                    </span>

                </Link>

            </nav>
        </>
    );
}

export default UserNav;
