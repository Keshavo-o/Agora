import { useState } from "react";
import {
    Search,
    MessageSquare,
    Flag,
    Users,
    MoreHorizontal
} from "lucide-react";

import "./AdminCommunity.css";


function AdminCommunity() {

    const [search, setSearch] = useState("");
    const [status, setStatus] = useState("All Status");


    /*
    =========================================
    TEMPORARY COMMUNITY DATA
    =========================================
    */

    const posts = [

        {
            id: 1,
            title: "Anyone interested in the coding meetup?",
            author: "Harshit",
            category: "General",
            reports: 0,
            status: "Visible",
            posted: "Aug 10, 2026"
        },

        {
            id: 2,
            title: "Selling my old programming books",
            author: "Ankit Sharma",
            category: "Marketplace",
            reports: 0,
            status: "Visible",
            posted: "Aug 09, 2026"
        },

        {
            id: 3,
            title: "Important announcement about tomorrow's event",
            author: "Priya Singh",
            category: "Announcements",
            reports: 2,
            status: "Reported",
            posted: "Aug 08, 2026"
        },

        {
            id: 4,
            title: "Spam links being posted repeatedly",
            author: "Rahul Verma",
            category: "General",
            reports: 5,
            status: "Flagged",
            posted: "Aug 08, 2026"
        },

        {
            id: 5,
            title: "Looking for teammates for project",
            author: "Aman Gupta",
            category: "Projects",
            reports: 0,
            status: "Visible",
            posted: "Aug 07, 2026"
        },

        {
            id: 6,
            title: "Discussion regarding campus facilities",
            author: "Neha Kapoor",
            category: "Discussion",
            reports: 1,
            status: "Under Review",
            posted: "Aug 06, 2026"
        }

    ];


    /*
    =========================================
    STATISTICS
    =========================================
    */

    const communityStats = [

        {
            title: "POSTS",
            value: "8,421",
            description: "Total community posts",
            icon: MessageSquare
        },

        {
            title: "MEMBERS",
            value: "5,284",
            description: "Active community members",
            icon: Users
        },

        {
            title: "REPORTS",
            value: "17",
            description: "Require moderation",
            icon: Flag
        }

    ];


    /*
    =========================================
    FILTER
    =========================================
    */

    const filteredPosts = posts.filter((post) => {

        const matchesSearch =
            post.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            post.author
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesStatus =
            status === "All Status" ||
            post.status === status;


        return matchesSearch && matchesStatus;

    });


    return (

        <main className="admin-community-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <section className="admin-community-header">

                <div>

                    <div className="admin-community-label">
                        AGORA / COMMUNITY
                    </div>

                    <h1>
                        Community
                    </h1>

                    <p>
                        Monitor discussions and maintain a healthy community.
                    </p>

                </div>


                <div className="admin-community-summary">

                    <span>
                        COMMUNITY STATUS
                    </span>

                    <strong>
                        HEALTHY
                    </strong>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="admin-community-stats">

                {communityStats.map((stat) => {

                    const Icon = stat.icon;

                    return (

                        <div
                            className="admin-community-stat"
                            key={stat.title}
                        >

                            <div className="admin-community-stat-top">

                                <span>
                                    {stat.title}
                                </span>

                                <Icon
                                    size={16}
                                    strokeWidth={1.5}
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
                TOOLBAR
            ========================================= */}

            <section className="admin-community-toolbar">


                <div className="admin-community-search">

                    <Search
                        size={16}
                        strokeWidth={1.5}
                    />

                    <input
                        type="text"
                        placeholder="Search posts or members..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="admin-community-filter">

                    <select
                        value={status}
                        onChange={(e) =>
                            setStatus(e.target.value)
                        }
                    >

                        <option>
                            All Status
                        </option>

                        <option>
                            Visible
                        </option>

                        <option>
                            Reported
                        </option>

                        <option>
                            Flagged
                        </option>

                        <option>
                            Under Review
                        </option>

                    </select>

                </div>

            </section>


            {/* =========================================
                COMMUNITY TABLE
            ========================================= */}

            <section className="admin-community-table-wrapper">

                <table className="admin-community-table">

                    <thead>

                        <tr>

                            <th>
                                POST
                            </th>

                            <th>
                                AUTHOR
                            </th>

                            <th>
                                CATEGORY
                            </th>

                            <th>
                                REPORTS
                            </th>

                            <th>
                                STATUS
                            </th>

                            <th>
                                POSTED
                            </th>

                            <th>
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredPosts.map((post) => (

                            <tr key={post.id}>


                                {/* POST */}

                                <td>

                                    <div className="admin-community-post">

                                        <div className="admin-community-post-icon">

                                            <MessageSquare
                                                size={16}
                                                strokeWidth={1.4}
                                            />

                                        </div>


                                        <div>

                                            <strong>
                                                {post.title}
                                            </strong>

                                            <span>
                                                Post #{post.id}
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                {/* AUTHOR */}

                                <td>

                                    <span className="admin-community-author">
                                        {post.author}
                                    </span>

                                </td>


                                {/* CATEGORY */}

                                <td>

                                    <span className="admin-community-category">
                                        {post.category}
                                    </span>

                                </td>


                                {/* REPORTS */}

                                <td>

                                    <span
                                        className={
                                            post.reports > 0
                                                ? "admin-community-reports admin-community-reports-active"
                                                : "admin-community-reports"
                                        }
                                    >

                                        {post.reports}

                                    </span>

                                </td>


                                {/* STATUS */}

                                <td>

                                    <span
                                        className={
                                            `admin - community - status admin - community - status - ${post.status
                                                .toLowerCase()
                                                .replace(" ", "-")
                                            } `
                                        }
                                    >

                                        <i></i>

                                        {post.status}

                                    </span>

                                </td>


                                {/* POSTED */}

                                <td>

                                    <span className="admin-community-date">
                                        {post.posted}
                                    </span>

                                </td>


                                {/* ACTION */}

                                <td>

                                    <button
                                        type="button"
                                        className="admin-community-action"
                                        aria-label="Post actions"
                                    >

                                        <MoreHorizontal
                                            size={17}
                                            strokeWidth={1.5}
                                        />

                                    </button>

                                </td>

                            </tr>

                        ))}


                        {filteredPosts.length === 0 && (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="admin-community-empty"
                                >

                                    No community posts found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <section className="admin-community-footer">

                <span>
                    Showing {filteredPosts.length} posts
                </span>


                <div className="admin-community-footer-status">

                    <span className="admin-community-health-dot"></span>

                    Community operational

                </div>

            </section>

        </main>
    );
}


export default AdminCommunity;
