import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

function AdminLogin() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        username: "",
        password: ""
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log("logging admin", form)
        fetch("/api/adminserver/services/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    setError("")
                    navigate("/admin")
                } else {
                    setError(data.message)
                }
            })
    }

    return (
        <main className="agora-admin-login">
            <button className="admin-back-home" onClick={() => navigate("/")} type="button" >
                <span>←</span> BACK TO AGORA
            </button>

            {/* Subtle architectural lines */}
            <div className="admin-architecture admin-architecture-left"></div>
            <div className="admin-architecture admin-architecture-right"></div>

            <section className="admin-login-container">

                {/* Logo */}
                <div className="admin-brand">

                    <div className="admin-logo">
                        <span>A</span>
                    </div>

                    <div className="admin-brand-name">
                        AGORA
                    </div>

                </div>


                {/* Small label */}
                <div className="admin-label">
                    ADMIN ACCESS
                </div>


                {/* Heading */}
                <h1>
                    ADMIN LOGIN
                </h1>

                <p className="admin-description">
                    Enter your credentials to access the Agora administration.
                </p>


                {/* Login Form */}
                <form
                    className="admin-login-form"
                    onSubmit={handleSubmit}
                >

                    <div className="admin-field">

                        <label htmlFor="username">
                            USERNAME
                        </label>

                        <input
                            id="username"
                            name="username"
                            type="text"
                            value={form.username}
                            onChange={handleChange}
                            autoComplete="username"
                            placeholder="Enter username"
                        />

                    </div>


                    <div className="admin-field">

                        <label htmlFor="password">
                            PASSWORD
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                            placeholder="Enter password"
                        />

                    </div>

                    {error && (
                        <div className="admin-login-error">
                            <span className="admin-error-icon"> ! </span>
                            <p> {error} </p>
                        </div>
                    )}

                    <button
                        type="submit"
                        className="admin-login-button"
                    >
                        SIGN IN

                        <span>→</span>

                    </button>

                </form>
                <div className="admin-notice">
                    <div className="admin-notice-title">
                        ADMINISTRATION NOTICE
                    </div>

                    <p>
                        Please note that administrator accounts are created by the Agora department only.
                    </p>

                    <p>
                        If you require administrative access, please contact our customer support team.
                    </p>
                </div>


                {/* Footer */}
                <div className="admin-login-footer">

                    <span></span>

                    <p>
                        AGORA ADMINISTRATION
                    </p>

                    <span></span>

                </div>

            </section>

        </main>
    );
}

export default AdminLogin;