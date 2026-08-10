import { useState } from "react";
import {
    Search,
    Package,
    Flag,
    CheckCircle,
    Clock,
    MoreHorizontal
} from "lucide-react";

import "./AdminMarket.css";


function AdminMarket() {

    const [search, setSearch] = useState("");

    const [status, setStatus] = useState("All Status");


    /*
    =========================================
    TEMPORARY MARKET DATA

    Replace with API data later.
    =========================================
    */

    const listings = [

        {
            id: 1,
            name: "Vintage Camera",
            seller: "Harshit",
            category: "Electronics",
            price: "₹12,500",
            status: "Active",
            listed: "Aug 10, 2026"
        },

        {
            id: 2,
            name: "Wooden Study Table",
            seller: "Ankit Sharma",
            category: "Furniture",
            price: "₹4,800",
            status: "Pending",
            listed: "Aug 09, 2026"
        },

        {
            id: 3,
            name: "Mechanical Keyboard",
            seller: "Rahul Verma",
            category: "Electronics",
            price: "₹3,200",
            status: "Active",
            listed: "Aug 08, 2026"
        },

        {
            id: 4,
            name: "College Textbook Set",
            seller: "Priya Singh",
            category: "Books",
            price: "₹1,500",
            status: "Reported",
            listed: "Aug 07, 2026"
        },

        {
            id: 5,
            name: "Desk Lamp",
            seller: "Aman Gupta",
            category: "Home",
            price: "₹900",
            status: "Active",
            listed: "Aug 06, 2026"
        },

        {
            id: 6,
            name: "Scientific Calculator",
            seller: "Neha Kapoor",
            category: "Education",
            price: "₹650",
            status: "Sold",
            listed: "Aug 05, 2026"
        }

    ];


    /*
    =========================================
    MARKET STATISTICS
    =========================================
    */

    const marketStats = [

        {
            title: "LISTINGS",
            value: "3,821",
            description: "Total marketplace listings",
            icon: Package
        },

        {
            title: "PENDING",
            value: "28",
            description: "Awaiting approval",
            icon: Clock
        },

        {
            title: "REPORTS",
            value: "11",
            description: "Listings reported",
            icon: Flag
        }

    ];


    /*
    =========================================
    FILTER LISTINGS
    =========================================
    */

    const filteredListings = listings.filter((listing) => {

        const matchesSearch =
            listing.name
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            listing.seller
                .toLowerCase()
                .includes(search.toLowerCase());


        const matchesStatus =
            status === "All Status" ||
            listing.status === status;


        return matchesSearch && matchesStatus;

    });


    return (

        <main className="admin-market-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <section className="admin-market-header">

                <div>

                    <div className="admin-market-label">
                        AGORA / MARKET
                    </div>

                    <h1>
                        Marketplace
                    </h1>

                    <p>
                        Monitor listings, approvals and marketplace activity.
                    </p>

                </div>


                <div className="admin-market-summary">

                    <span>
                        MARKETPLACE
                    </span>

                    <strong>
                        ACTIVE
                    </strong>

                </div>

            </section>


            {/* =========================================
                STATISTICS
            ========================================= */}

            <section className="admin-market-stats">

                {marketStats.map((stat) => {

                    const Icon = stat.icon;

                    return (

                        <div
                            className="admin-market-stat"
                            key={stat.title}
                        >

                            <div className="admin-market-stat-top">

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

            <section className="admin-market-toolbar">


                <div className="admin-market-search">

                    <Search
                        size={16}
                        strokeWidth={1.5}
                    />

                    <input
                        type="text"
                        placeholder="Search listings or sellers..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>


                <div className="admin-market-filter">

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
                            Pending
                        </option>

                        <option>
                            Reported
                        </option>

                        <option>
                            Sold
                        </option>

                    </select>

                </div>

            </section>


            {/* =========================================
                LISTINGS
            ========================================= */}

            <section className="admin-market-table-wrapper">

                <table className="admin-market-table">

                    <thead>

                        <tr>

                            <th>
                                LISTING
                            </th>

                            <th>
                                SELLER
                            </th>

                            <th>
                                CATEGORY
                            </th>

                            <th>
                                PRICE
                            </th>

                            <th>
                                STATUS
                            </th>

                            <th>
                                LISTED
                            </th>

                            <th>
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {filteredListings.map((listing) => (

                            <tr key={listing.id}>


                                {/* LISTING */}

                                <td>

                                    <div className="admin-market-listing">

                                        <div className="admin-market-product-icon">

                                            <Package
                                                size={16}
                                                strokeWidth={1.4}
                                            />

                                        </div>


                                        <div>

                                            <strong>
                                                {listing.name}
                                            </strong>

                                            <span>
                                                Listing #{listing.id}
                                            </span>

                                        </div>

                                    </div>

                                </td>


                                {/* SELLER */}

                                <td>

                                    <span className="admin-market-seller">
                                        {listing.seller}
                                    </span>

                                </td>


                                {/* CATEGORY */}

                                <td>

                                    <span className="admin-market-category">
                                        {listing.category}
                                    </span>

                                </td>


                                {/* PRICE */}

                                <td>

                                    <span className="admin-market-price">
                                        {listing.price}
                                    </span>

                                </td>


                                {/* STATUS */}

                                <td>

                                    <span
                                        className={
                                            `admin - market - status admin - market - status - ${listing.status.toLowerCase()} `
                                        }
                                    >

                                        <i></i>

                                        {listing.status}

                                    </span>

                                </td>


                                {/* LISTED */}

                                <td>

                                    <span className="admin-market-date">
                                        {listing.listed}
                                    </span>

                                </td>


                                {/* ACTION */}

                                <td>

                                    <button
                                        className="admin-market-action"
                                        type="button"
                                        aria-label="Listing actions"
                                    >

                                        <MoreHorizontal
                                            size={17}
                                            strokeWidth={1.5}
                                        />

                                    </button>

                                </td>

                            </tr>

                        ))}


                        {filteredListings.length === 0 && (

                            <tr>

                                <td
                                    colSpan="7"
                                    className="admin-market-empty"
                                >

                                    No listings found.

                                </td>

                            </tr>

                        )}

                    </tbody>

                </table>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <section className="admin-market-footer">

                <span>
                    Showing {filteredListings.length} listings
                </span>


                <div className="admin-market-footer-status">

                    <CheckCircle
                        size={13}
                        strokeWidth={1.5}
                    />

                    Marketplace operational

                </div>

            </section>

        </main>
    );
}


export default AdminMarket;
