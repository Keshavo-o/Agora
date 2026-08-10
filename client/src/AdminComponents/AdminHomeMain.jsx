import {
    Users,
    Package,
    ShoppingBag,
    Flag,
    Clock,
    CheckCircle
} from "lucide-react";

import "./AdminMainHome.css";


function AdminHomeMain() {

    /*
    =========================================
    TEMPORARY DATA

    Replace these with API data later.
    =========================================
    */

    const stats = [
        {
            title: "USERS",
            value: "12,482",
            description: "Registered users",
            icon: Users
        },

        {
            title: "PRODUCTS",
            value: "3,821",
            description: "Active listings",
            icon: Package
        },

        {
            title: "ORDERS",
            value: "1,294",
            description: "Total orders",
            icon: ShoppingBag
        }
    ];


    const attention = [
        {
            title: "Reports awaiting review",
            count: 3,
            type: "Moderation",
            icon: Flag
        },

        {
            title: "Products awaiting approval",
            count: 8,
            type: "Market",
            icon: Package
        },

        {
            title: "User issues",
            count: 5,
            type: "Users",
            icon: Users
        }
    ];


    const activity = [
        {
            action: "Product approved",
            subject: "Vintage Camera",
            time: "10:42 AM",
            by: "Administrator"
        },

        {
            action: "User suspended",
            subject: "user_2048",
            time: "10:31 AM",
            by: "Administrator"
        },

        {
            action: "New community created",
            subject: "Photography Circle",
            time: "10:18 AM",
            by: "System"
        },

        {
            action: "Report resolved",
            subject: "Report #1842",
            time: "09:54 AM",
            by: "Administrator"
        }
    ];


    return (

        <main className="admin-home-main">


            {/* =========================================
                PAGE INTRO
            ========================================= */}

            <section className="admin-home-intro">

                <div>

                    <div className="admin-page-label">
                        AGORA / OVERVIEW
                    </div>

                    <h1>
                        Good evening, Administrator.
                    </h1>

                    <p>
                        Here is the current state of Agora.
                    </p>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="admin-stats">

                {stats.map((stat) => {

                    const Icon = stat.icon;

                    return (

                        <div
                            className="admin-stat"
                            key={stat.title}
                        >

                            <div className="admin-stat-top">

                                <span>
                                    {stat.title}
                                </span>

                                <Icon
                                    size={16}
                                    strokeWidth={1.4}
                                />

                            </div>

                            <strong>
                                {stat.value}
                            </strong>

                            <p>
                                {stat.description}
                            </p>

                        </div>

                    );

                })}

            </section>


            {/* =========================================
                ATTENTION
            ========================================= */}

            <section className="admin-section">

                <div className="admin-section-heading">

                    <div>

                        <span>
                            ATTENTION
                        </span>

                        <h2>
                            Requires review
                        </h2>

                    </div>

                    <Clock
                        size={17}
                        strokeWidth={1.4}
                    />

                </div>


                <div className="admin-attention-list">

                    {attention.map((item) => {

                        const Icon = item.icon;

                        return (

                            <div
                                className="admin-attention-item"
                                key={item.title}
                            >

                                <div className="admin-attention-icon">

                                    <Icon
                                        size={16}
                                        strokeWidth={1.4}
                                    />

                                </div>


                                <div className="admin-attention-content">

                                    <strong>
                                        {item.title}
                                    </strong>

                                    <span>
                                        {item.type}
                                    </span>

                                </div>


                                <div className="admin-attention-count">

                                    {item.count}

                                </div>

                            </div>

                        );

                    })}

                </div>

            </section>


            {/* =========================================
                RECENT ACTIVITY
            ========================================= */}

            <section className="admin-section admin-activity-section">

                <div className="admin-section-heading">

                    <div>

                        <span>
                            ACTIVITY
                        </span>

                        <h2>
                            Recent activity
                        </h2>

                    </div>

                    <CheckCircle
                        size={17}
                        strokeWidth={1.4}
                    />

                </div>


                <div className="admin-activity-list">

                    {activity.map((item, index) => (

                        <div
                            className="admin-activity-item"
                            key={index}
                        >

                            <div className="admin-activity-time">
                                {item.time}
                            </div>


                            <div className="admin-activity-marker"></div>


                            <div className="admin-activity-content">

                                <strong>
                                    {item.action}
                                </strong>

                                <span>
                                    {item.subject}
                                </span>

                            </div>


                            <div className="admin-activity-by">
                                {item.by}
                            </div>

                        </div>

                    ))}

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="admin-home-footer">

                <span>
                    AGORA ADMINISTRATION
                </span>

                <span>
                    SYSTEM OPERATIONAL
                </span>

            </footer>

        </main>
    );
}


export default AdminHomeMain;
