import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

import "./AdminUsers.css";


function AdminUsers() {

    const [search, setSearch] = useState("");

    const [role, setRole] = useState("All Roles");

    const [status, setStatus] = useState("All Status");


    /*
    =========================================
    TEMPORARY USER DATA

    Replace this with API data later.
    =========================================
    */

    const users = [

        {
            id: 1,
            username: "Harshit",
            email: "harshit@example.com",
            role: "User",
            status: "Active",
            joined: "Aug 10, 2026"
        },

        {
            id: 2,
            username: "Ankit Sharma",
            email: "ankit@example.com",
            role: "Moderator",
            status: "Active",
            joined: "Aug 08, 2026"
        },

        {
            id: 3,
            username: "Rahul Verma",
            email: "rahul@example.com",
            role: "User",
            status: "Suspended",
            joined: "Aug 05, 2026"
        },

        {
            id: 4,
            username: "Priya Singh",
            email: "priya@example.com",
            role: "User",
            status: "Active",
            joined: "Aug 03, 2026"
        },

        {
            id: 5,
            username: "Aman Gupta",
            email: "aman@example.com",
            role: "Moderator",
            status: "Active",
            joined: "Jul 31, 2026"
        },

        {
            id: 6,
            username: "Neha Kapoor",
            email: "neha@example.com",
            role: "User",
            status: "Inactive",
            joined: "Jul 28, 2026"
        }
    ];


    /*
    =========================================
    FILTER USERS
    =========================================
    */

    const filteredUsers = users.filter((user) => {

        const matchesSearch =
            user.username
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            user.email
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesRole =
            role === "All Roles" ||
            user.role === role;


        const matchesStatus =
            status === "All Status" ||
            user.status === status;


        return (
            matchesSearch &&
            matchesRole &&
            matchesStatus
        );

    });


    return (

        <main className="admin-users-page">


            {/* =========================================
                PAGE HEADER
            ========================================= */}

            <section className="admin-users-header">

                <div>

                    <div className="admin-users-label">
                        AGORA / USERS
                    </div>

                    <h1>
                        User Management
                    </h1>

                    <p>
                        Manage registered users and their access.
                    </p>

                </div>


                <div className="admin-users-total">

                    <strong>
                        12,482
                    </strong>

                    <span>
                        REGISTERED USERS
                    </span>

                </div>

            </section>


            {/* =========================================
                TOOLBAR
            ========================================= */}

            <section className="admin-users-toolbar">


                {/* SEARCH */}

                <div className="admin-users-search">

                    <Search
                        size={16}
                        strokeWidth={1.5}
                    />

                    <input
                        type="text"
                        placeholder="Search users..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                {/* FILTERS */}

                <div className="admin-users-filters">

                    <div className="admin-users-filter">

                        <SlidersHorizontal
                            size={14}
                            strokeWidth={1.5}
                        />

                        <select
                            value={role}
                            onChange={(e) =>
                                setRole(e.target.value)
                            }
                        >

                            <option>
                                All Roles
                            </option>

                            <option>
                                User
                            </option>

                            <option>
                                Moderator
                            </option>

                        </select>

                    </div>


                    <div className="admin-users-filter">

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
                                Active
                            </option>

                            <option>
                                Inactive
                            </option>

                            <option>
                                Suspended
                            </option>

                        </select>

                    </div>

                </div>

            </section>


            {/* =========================================
                USER TABLE
            ========================================= */}

            <section className="admin-users-table-wrapper">

                <table className="admin-users-table">

                    <thead>

                        <tr>

                            <th>
                                USER
                            </th>

                            <th>
                                ROLE
                            </th>

                            <th>
                                STATUS
                            </th>

                            <th>
                                JOINED
                            </th>

                            <th>
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredUsers.map((user) => (

                            <tr key={user.id}>


                                {/* USER */}

                                <td>

                                    <div className="admin-user-cell">

                                        <div className="admin-user-avatar">

                                            {user.username
                                                .charAt(0)
                                                .toUpperCase()}

                                        </div>


                                        <div className="admin-user-details">

                                            <strong>
                                                {user.username}
                                            </strong>

                                            <span>
                                                {user.email}
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                {/* ROLE */}

                                <td>

                                    <span className="admin-user-role">

                                        {user.role}

                                    </span>

                                </td>


                                {/* STATUS */}

                                <td>

                                    <span
                                        className={
                                            `admin-user-status admin-status-${user.status.toLowerCase()}`
                                        }
                                    >

                                        <i></i>

                                        {user.status}

                                    </span>

                                </td>


                                {/* JOINED */}

                                <td>

                                    <span className="admin-user-joined">

                                        {user.joined}

                                    </span>

                                </td>


                                {/* ACTION */}

                                <td>

                                    <button
                                        className="admin-user-action"
                                        type="button"
                                        aria-label="User actions"
                                    >

                                        <MoreHorizontal
                                            size={17}
                                            strokeWidth={1.5}
                                        />

                                    </button>

                                </td>

                            </tr>

                        ))}


                        {filteredUsers.length === 0 && (

                            <tr>

                                <td
                                    colSpan="5"
                                    className="admin-users-empty"
                                >

                                    No users found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </section>


            {/* =========================================
                PAGINATION
            ========================================= */}

            <section className="admin-users-pagination">

                <span>
                    Showing 1–6 of 12,482 users
                </span>


                <div className="admin-pagination-controls">

                    <button
                        type="button"
                        aria-label="Previous page"
                    >

                        <ChevronLeft
                            size={15}
                            strokeWidth={1.5}
                        />

                    </button>


                    <button className="admin-page-active">
                        1
                    </button>

                    <button>
                        2
                    </button>

                    <button>
                        3
                    </button>

                    <span>
                        ...
                    </span>

                    <button>
                        42
                    </button>


                    <button
                        type="button"
                        aria-label="Next page"
                    >

                        <ChevronRight
                            size={15}
                            strokeWidth={1.5}
                        />

                    </button>

                </div>

            </section>

        </main>
    );
}


export default AdminUsers;
