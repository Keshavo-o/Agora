import { useState } from "react";
import {
    Flag,
    Search,
    MessageSquare,
    User,
    AlertTriangle,
    MoreHorizontal
} from "lucide-react";

import "./AdminModeration.css";


function AdminModeration() {

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");


    /*
    =========================================
    TEMPORARY MODERATION DATA
    =========================================
    */

    const reports = [

        {
            id: 1,
            type: "Post",
            title: "Spam links in community discussion",
            reportedBy: "Ankit Sharma",
            reportedUser: "Rahul Verma",
            reason: "Spam",
            status: "Pending",
            date: "Aug 10, 2026"
        },

        {
            id: 2,
            type: "Comment",
            title: "Inappropriate comment on event post",
            reportedBy: "Priya Singh",
            reportedUser: "Aman Gupta",
            reason: "Inappropriate Content",
            status: "Pending",
            date: "Aug 10, 2026"
        },

        {
            id: 3,
            type: "Post",
            title: "Misleading information about campus event",
            reportedBy: "Neha Kapoor",
            reportedUser: "Vikash Kumar",
            reason: "Misleading",
            status: "Under Review",
            date: "Aug 09, 2026"
        },

        {
            id: 4,
            type: "Comment",
            title: "Repeated offensive comments",
            reportedBy: "Harshit",
            reportedUser: "Rohit Mehta",
            reason: "Harassment",
            status: "Pending",
            date: "Aug 09, 2026"
        },

        {
            id: 5,
            type: "Post",
            title: "Unauthorized promotional content",
            reportedBy: "Karan Singh",
            reportedUser: "Mohit Sharma",
            reason: "Promotion",
            status: "Resolved",
            date: "Aug 08, 2026"
        }

    ];


    /*
    =========================================
    STATISTICS
    =========================================
    */

    const stats = [

        {
            label: "PENDING",
            value: "12",
            description: "Reports waiting for review"
        },

        {
            label: "UNDER REVIEW",
            value: "5",
            description: "Currently being investigated"
        },

        {
            label: "RESOLVED",
            value: "184",
            description: "Reports resolved"
        }

    ];


    /*
    =========================================
    FILTER
    =========================================
    */

    const filteredReports = reports.filter((report) => {

        const matchesSearch =
            report.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            report.reportedUser
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            report.reason
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesFilter =
            filter === "All" ||
            report.status === filter;


        return matchesSearch && matchesFilter;

    });


    return (

        <main className="admin-moderation-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <section className="admin-moderation-header">

                <div>

                    <div className="admin-moderation-label">
                        AGORA / MODERATION
                    </div>

                    <h1>
                        Moderation
                    </h1>

                    <p>
                        Review reported content and maintain community standards.
                    </p>

                </div>


                <div className="admin-moderation-warning">

                    <AlertTriangle
                        size={16}
                        strokeWidth={1.4}
                    />

                    <div>

                        <span>
                            ATTENTION REQUIRED
                        </span>

                        <strong>
                            12 REPORTS
                        </strong>

                    </div>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="admin-moderation-stats">

                {stats.map((stat) => (

                    <div
                        className="admin-moderation-stat"
                        key={stat.label}
                    >

                        <div className="admin-moderation-stat-label">

                            {stat.label}

                        </div>

                        <strong>
                            {stat.value}
                        </strong>

                        <p>
                            {stat.description}
                        </p>

                    </div>

                ))}

            </section>


            {/* =========================================
                TOOLBAR
            ========================================= */}

            <section className="admin-moderation-toolbar">


                <div className="admin-moderation-search">

                    <Search
                        size={16}
                        strokeWidth={1.5}
                    />

                    <input
                        type="text"
                        placeholder="Search reports..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="admin-moderation-filters">

                    <button
                        className={
                            filter === "All"
                                ? "active"
                                : ""
                        }
                        onClick={() => setFilter("All")}
                    >
                        All
                    </button>


                    <button
                        className={
                            filter === "Pending"
                                ? "active"
                                : ""
                        }
                        onClick={() => setFilter("Pending")}
                    >
                        Pending
                    </button>


                    <button
                        className={
                            filter === "Under Review"
                                ? "active"
                                : ""
                        }
                        onClick={() => setFilter("Under Review")}
                    >
                        Under Review
                    </button>


                    <button
                        className={
                            filter === "Resolved"
                                ? "active"
                                : ""
                        }
                        onClick={() => setFilter("Resolved")}
                    >
                        Resolved
                    </button>

                </div>

            </section>


            {/* =========================================
                REPORT LIST
            ========================================= */}

            <section className="admin-moderation-list">


                <div className="admin-moderation-list-header">

                    <span>
                        REPORTED CONTENT
                    </span>

                    <span>
                        {filteredReports.length} REPORTS
                    </span>

                </div>


                {filteredReports.map((report) => (

                    <article
                        className="admin-moderation-item"
                        key={report.id}
                    >


                        {/* ICON */}

                        <div className="admin-moderation-icon">

                            {report.type === "Post" ? (

                                <MessageSquare
                                    size={17}
                                    strokeWidth={1.4}
                                />

                            ) : (

                                <Flag
                                    size={17}
                                    strokeWidth={1.4}
                                />

                            )}

                        </div>


                        {/* CONTENT */}

                        <div className="admin-moderation-content">

                            <div className="admin-moderation-content-top">

                                <span className="admin-moderation-type">
                                    {report.type}
                                </span>

                                <span className="admin-moderation-date">
                                    {report.date}
                                </span>

                            </div>


                            <h2>
                                {report.title}
                            </h2>


                            <div className="admin-moderation-meta">

                                <span>

                                    <User
                                        size={12}
                                        strokeWidth={1.5}
                                    />

                                    Reported user:
                                    <strong>
                                        {report.reportedUser}
                                    </strong>

                                </span>


                                <span>

                                    Reported by:
                                    <strong>
                                        {report.reportedBy}
                                    </strong>

                                </span>

                            </div>

                        </div>


                        {/* REASON */}

                        <div className="admin-moderation-reason">

                            <span>
                                REASON
                            </span>

                            <strong>
                                {report.reason}
                            </strong>

                        </div>


                        {/* STATUS */}

                        <div className="admin-moderation-status">

                            <span
                                className={
                                    `admin-moderation-status-${report.status
                                        .toLowerCase()
                                        .replace(" ", "-")}`
                                }
                            >

                                <i></i>

                                {report.status}

                            </span>

                        </div>


                        {/* ACTION */}

                        <button
                            className="admin-moderation-action"
                            type="button"
                            aria-label="Moderation actions"
                        >

                            <MoreHorizontal
                                size={18}
                                strokeWidth={1.5}
                            />

                        </button>

                    </article>

                ))}


                {filteredReports.length === 0 && (

                    <div className="admin-moderation-empty">

                        <Flag
                            size={22}
                            strokeWidth={1.2}
                        />

                        <span>
                            No reports found.
                        </span>

                    </div>

                )}

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="admin-moderation-footer">

                <span>
                    Agora Administration
                </span>

                <span>
                    Moderation Center
                </span>

            </footer>

        </main>
    );
}


export default AdminModeration;
