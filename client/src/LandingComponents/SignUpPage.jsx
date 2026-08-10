import { useState, useEffect } from "react";
import "./SignUpPage.css";
import { useNavigate, Link } from "react-router-dom";

function SignUpPage() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    // console.log(user)
    function handlesubmit(e) {
        if (user.password != user.confirmPassword) {
            setErr("passwords do not match")
            return
        }
        e.preventDefault()
        // console.log("submitting data")
        fetch('/api/userserver/services/create', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.success) {
                    return navigate("/login")
                }
                setErr(data.message)

            })
    }

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    return (
        <main className="agora-signup">

            <button
                className="signup-back-home"
                onClick={() => navigate("/")}
                type="button"
            >

                <span className="signup-back-icon">
                    ←
                </span>

                <span className="signup-back-text">
                    BACK TO HOME
                </span>

            </button>




            <div className="signup-grain"></div>

            <div className="signup-orbit signup-orbit-one"></div>
            <div className="signup-orbit signup-orbit-two"></div>



            <section className="signup-brand-panel">

                <div className="signup-brand-top">

                    <div className="signup-logo">

                        <div className="">
                            <span></span>
                        </div>

                        <span className="signup-logo-text">

                        </span>

                    </div>

                    <span className="signup-brand-label">

                    </span>

                </div>


                <div className="signup-brand-content">

                    <span className="signup-brand-kicker">
                        BEGIN YOUR JOURNEY
                    </span>

                    <h1>
                        JOIN
                        <br />
                        <em>AGORA.</em>
                    </h1>

                    <p>
                        Find your place.
                        <br />
                        Discover what's next.
                        <br />
                        Become part of the community.
                    </p>

                </div>


                <div className="signup-brand-bottom">

                    <div className="signup-brand-diamond">
                        ◇
                    </div>

                    <span>
                        CONNECT · DISCOVER · SHOP
                    </span>

                </div>

            </section>


            {/* =========================================
                ARCHITECTURAL DIVIDER
            ========================================= */}

            <div className="signup-divider">

                <div className="signup-divider-line"></div>

                <div className="signup-divider-diamond">
                    ◇
                </div>

                <div className="signup-divider-line"></div>

            </div>


            {/* =========================================
                RIGHT — SIGNUP FORM
            ========================================= */}

            <section className="signup-form-panel">

                <div className="signup-form-wrapper">

                    {/* HEADING */}

                    <div className="signup-form-heading">

                        <span className="signup-form-kicker">
                            NEW MEMBER
                        </span>

                        <h2>
                            JOIN THE
                            <br />
                            <em>AGORA</em>
                        </h2>

                        <p>
                            Create your account and enter the square.
                        </p>

                    </div>


                    {/* FORM */}

                    <form onSubmit={handlesubmit} className="agora-signup-form">

                        {/* NAME */}

                        <div className="signup-field">

                            <label htmlFor="name">
                                YOUR NAME
                            </label>

                            <input
                                onChange={handleChange}
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                autoComplete="name"
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="signup-field">

                            <label htmlFor="signup-email">
                                EMAIL ADDRESS
                            </label>

                            <input
                                onChange={handleChange}
                                id="signup-email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className="signup-field">

                            <label htmlFor="signup-password">
                                PASSWORD
                            </label>

                            <div className="signup-password-input">

                                <input
                                    onChange={handleChange}
                                    id="signup-password"
                                    name="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Create a password"
                                    autoComplete="new-password"
                                />

                                <button
                                    type="button"
                                    className="signup-show-password"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword
                                        ? "HIDE"
                                        : "SHOW"}
                                </button>

                            </div>

                        </div>


                        {/* CONFIRM PASSWORD */}

                        <div className="signup-field">

                            <label htmlFor="confirm-password">
                                CONFIRM PASSWORD
                            </label>

                            <div className="signup-password-input">

                                <input
                                    onChange={handleChange}
                                    id="confirm-password"
                                    name="confirmPassword"
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirm your password"
                                    autoComplete="new-password"
                                />

                                <button
                                    type="button"
                                    className="signup-show-password"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword
                                        ? "HIDE"
                                        : "SHOW"}
                                </button>

                            </div>

                        </div>
                        {err && (
                            <div className="agora-error">

                                <span className="error-symbol">
                                    !
                                </span>

                                <span className="error-message">
                                    {err}
                                </span>

                            </div>
                        )}


                        {/* SUBMIT */}

                        <button
                            type="submit"
                            className="agora-signup-button"
                        >

                            <span>
                                CREATE ACCOUNT
                            </span>

                            <span className="signup-button-arrow">
                                →
                            </span>

                        </button>

                    </form>


                    {/* LOGIN */}

                    <div className="login-section">

                        <span>
                            ALREADY PART OF THE AGORA?
                        </span>

                        <Link to="/login">
                            LOGIN
                            <span>↗</span>
                        </Link>

                    </div>

                </div>


                {/* FOOTER */}

                <div className="signup-form-footer">

                    <span>
                        SECURE REGISTRATION
                    </span>

                    <span>
                        AGORA © 2026
                    </span>

                </div>

            </section>

        </main>
    );
}

export default SignUpPage;
