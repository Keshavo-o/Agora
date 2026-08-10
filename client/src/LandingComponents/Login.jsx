import { useState } from "react";
import "./LoginPage.css";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [err, setErr] = useState("")

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    function handleuserlogin(e) {
        e.preventDefault()
        // console.log(user)
        fetch("/api/userserver/services", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    return navigate('/user')
                }
                setErr(data.message);
                setUser({
                    email: "",
                    password: ""
                })
            })
    }
    function handleloginchange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <main className="agora-login">

            <button
                className="back-to-home"
                onClick={() => navigate("/")}
                type="button"
            >

                <span className="back-icon">
                    ←
                </span>

                <span style={{ fontSize: '13px' }} className="back-text">
                    BACK TO HOME
                </span>

            </button>


            <div className="login-grain"></div>

            <div className="login-orbit login-orbit-one"></div>
            <div className="login-orbit login-orbit-two"></div>

            {/* left */}

            <section className="login-brand-panel">

                <div className="brand-top">

                    {/* <div className="agora-logo">

                        <div className="logo-frame">
                            <span>A</span>
                        </div>

                        <span className="logo-text">
                            AGORA
                        </span>

                    </div>

                    <span className="brand-label">
                        THE DIGITAL AGORA
                    </span> */}

                </div>


                <div className="brand-content">

                    <span style={{ fontSize: '10px' }} className="brand-kicker">
                        WELCOME BACK
                    </span>

                    <h1>
                        ENTER
                        <br />
                        <em>AGORA.</em>
                    </h1>

                    <p>
                        A place to connect.
                        <br />
                        A place to discover.
                        <br />
                        A place to shop.
                    </p>

                </div>


                <div className="brand-bottom">

                    <div className="brand-diamond">
                        ◇
                    </div>

                    <span>
                        CONNECT · DISCOVER · SHOP
                    </span>

                </div>

            </section>



            <div className="architectural-divider">

                <div className="divider-line"></div>

                <div className="divider-diamond">
                    ◇
                </div>

                <div className="divider-line"></div>

            </div>

            {/* right */}

            <section className="login-form-panel">

                <div className="login-form-wrapper">

                    <div className="form-heading">

                        <span style={{ fontSize: '11px' }} className="form-kicker">
                            MEMBER ACCESS
                        </span>

                        <h2>
                            RETURN TO
                            <br />
                            <em>AGORA.</em>
                        </h2>

                        <p style={{ fontSize: '13px' }}>
                            Sign in to continue.
                        </p>

                    </div>


                    <form onSubmit={handleuserlogin} className="agora-form">

                        {/* EMAIL */}

                        <div className="agora-field">

                            <label htmlFor="email" style={{ fontSize: '13px' }}>
                                EMAIL ADDRESS
                            </label>

                            <input
                                value={user.email}
                                onChange={handleloginchange}
                                style={{ fontSize: '15px' }}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                autoComplete="email"
                            />

                        </div>


                        {/* PASSWORD */}

                        <div className="agora-field">

                            <div className="field-header">

                                <label style={{ fontSize: '13px' }} htmlFor="password">
                                    PASSWORD
                                </label>

                                <button
                                    style={{ fontSize: '11px' }}
                                    type="button"
                                    className="forgot-link"
                                >
                                    FORGOT?
                                </button>

                            </div>


                            <div className="password-input">

                                <input
                                    value={user.password}
                                    onChange={handleloginchange}
                                    style={{ fontSize: '15px' }}
                                    id="password"
                                    name="password"
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                />

                                <button
                                    style={{ fontSize: '15px' }}
                                    type="button"
                                    className="show-password"
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


                        {/* SUBmit */}

                        <button
                            type="submit"
                            className="agora-login-button"
                        >

                            <span style={{ fontSize: '15px' }}>
                                LOGIN
                            </span>

                            <span className="button-arrow">
                                →
                            </span>

                        </button>

                    </form>

                    {/* if any error message */}

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



                    {/* SIgnuP */}

                    <div className="signup-section">

                        <span style={{ fontSize: '11px' }}>
                            NEW TO THE AGORA?
                        </span>

                        <Link to="/signup" style={{ fontSize: '11px' }} >
                            CREATE ACCOUNT
                            <span>↗</span>
                        </Link  >

                    </div>

                </div>


                {/* rightfooter */}

                <div className="form-footer">

                    <span>
                        SECURE MEMBER ACCESS
                    </span>

                    <span>
                        AGORA © 2026
                    </span>

                </div>

            </section>

        </main>
    );
}

export default Login;
