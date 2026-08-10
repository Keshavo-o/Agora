import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Bell, ChevronDown, LogOut, Settings, User } from "lucide-react";
import "./AdminNav.css";

function AdminNav() {

    const navigate = useNavigate();

    const [profileOpen, setProfileOpen] = useState(false);

    const profileRef = useRef(null);


    /*
    =========================================
    NAVIGATION
    =========================================
    */

    const navItems = [
        {
            name: "Overview",
            path: "/admin"
        },
        {
            name: "Users",
            path: "/admin/users"
        },
        {
            name: "Market",
            path: "/admin/market"
        },
        {
            name: "Community",
            path: "/admin/community"
        },
        {
            name: "Moderation",
            path: "/admin/moderation",
            badge: 3
        }
    ];


    /*
    =========================================
    CLOSE DROPDOWN
    =========================================
    */

    useEffect(() => {

        function handleOutsideClick(e) {

            if (
                profileRef.current &&
                !profileRef.current.contains(e.target)
            ) {
                setProfileOpen(false);
            }

        }

        document.addEventListener(
            "mousedown",
            handleOutsideClick
        );

        return () => {
            document.removeEventListener(
                "mousedown",
                handleOutsideClick
            );
        };

    }, []);


    /*
    =========================================
    LOGOUT
    =========================================
    */

    function handleLogout() {

        // Add your logout API here later

        setProfileOpen(false);

        navigate("/");
    }


    return (

        <header className="agora-admin-nav">

            <div className="admin-nav-inner">


                {/* =================================
                    BRAND
                ================================= */}

                <button
                    className="admin-brand"
                    onClick={() => navigate("/admin")}
                    type="button"
                >

                    <div className="admin-brand-mark">
                        <span>A</span>
                    </div>

                    <span className="admin-brand-name">
                        AGORA
                    </span>

                </button>


                {/* =================================
                    BRAND / NAV DIVIDER
                ================================= */}

                <div className="admin-nav-divider"></div>


                {/* =================================
                    MAIN NAVIGATION
                ================================= */}

                <nav className="admin-navigation">

                    {navItems.map((item) => (

                        <NavLink
                            style={{ fontSize: "13px" }}

                            key={item.name}
                            to={item.path}
                            end={item.path === "/admin"}
                            className={({ isActive }) =>
                                `admin-nav-item ${isActive
                                    ? "admin-nav-item-active"
                                    : ""
                                }`
                            }
                        >

                            <span>
                                {item.name}
                            </span>

                            {item.badge && (
                                <small>
                                    {item.badge}
                                </small>
                            )}

                        </NavLink>

                    ))}

                </nav>


                {/* =================================
                    RIGHT SECTION
                ================================= */}

                <div className="admin-nav-actions">


                    {/* NOTIFICATIONS */}

                    <button
                        type="button"
                        className="admin-notification"
                        onClick={() =>
                            navigate("/admin/notifications")
                        }
                        aria-label="Notifications"
                    >

                        <Bell
                            size={17}
                            strokeWidth={1.5}
                        />

                        <span className="admin-notification-dot"></span>

                    </button>


                    {/* VERTICAL DIVIDER */}

                    <div className="admin-action-divider"></div>


                    {/* =================================
                        PROFILE
                    ================================= */}

                    <div
                        className="admin-account"
                        ref={profileRef}
                    >

                        <button
                            type="button"
                            className="admin-account-button"
                            onClick={() =>
                                setProfileOpen(!profileOpen)
                            }
                        >

                            <div className="admin-account-avatar">
                                A
                            </div>

                            <div className="admin-account-details">

                                <span>
                                    Administrator
                                </span>

                                <small>
                                    ADMIN
                                </small>

                            </div>

                            <ChevronDown
                                size={14}
                                strokeWidth={1.5}
                                className={
                                    profileOpen
                                        ? "admin-chevron-open"
                                        : ""
                                }
                            />

                        </button>


                        {/* =================================
                            PROFILE MENU
                        ================================= */}

                        {profileOpen && (

                            <div className="admin-account-menu">


                                <div className="admin-menu-heading">

                                    <span>
                                        ADMINISTRATION
                                    </span>

                                    <small>
                                        Agora Control
                                    </small>

                                </div>


                                <div className="admin-menu-line"></div>


                                <button
                                    type="button"
                                    onClick={() => {

                                        setProfileOpen(false);

                                        navigate(
                                            "/admin/profile"
                                        );

                                    }}
                                >

                                    <User
                                        size={15}
                                        strokeWidth={1.5}
                                    />

                                    Profile

                                </button>


                                <button
                                    type="button"
                                    onClick={() => {

                                        setProfileOpen(false);

                                        navigate(
                                            "/admin/settings"
                                        );

                                    }}
                                >

                                    <Settings
                                        size={15}
                                        strokeWidth={1.5}
                                    />

                                    Settings

                                </button>


                                <div className="admin-menu-line"></div>


                                <button
                                    type="button"
                                    className="admin-menu-logout"
                                    onClick={handleLogout}
                                >

                                    <LogOut
                                        size={15}
                                        strokeWidth={1.5}
                                    />

                                    Logout

                                </button>

                            </div>

                        )}

                    </div>

                </div>

            </div>

        </header>
    );
}

export default AdminNav;
