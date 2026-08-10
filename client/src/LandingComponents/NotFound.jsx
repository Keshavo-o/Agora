import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {

    const navigate = useNavigate();

    return (
        <main className="agora-not-found">

            {/* =========================================
                BACKGROUND
            ========================================= */}

            <div className="not-found-grain"></div>

            <div className="not-found-orbit orbit-one"></div>
            <div className="not-found-orbit orbit-two"></div>







            <section className="not-found-content">

                <span className="not-found-kicker">
                    THE DIGITAL AGORA
                </span>


                <div className="not-found-number">
                    404
                </div>


                <div className="not-found-divider">

                    <span></span>

                    <div>◇</div>

                    <span></span>

                </div>


                <h1>
                    THIS PATH
                    <br />
                    <em>LEADS NOWHERE.</em>
                </h1>


                <p>
                    The place you are looking for
                    <br />
                    could not be found within the Agora.
                </p>


                {/* =====================================
                    RETURN BUTTON
                ===================================== */}

                <button
                    className="return-home-button"
                    onClick={() => navigate("/user")}
                    type="button"
                >

                    <span>
                        RETURN TO THE HOMEPAGE
                    </span>

                    <span className="return-home-arrow">
                        →
                    </span>

                </button>

            </section>


            {/* =========================================
                BOTTOM
            ========================================= */}

            <div className="not-found-bottom">

                <span>
                    CONNECT · DISCOVER · SHOP
                </span>

                <span>
                    AGORA © 2026
                </span>

            </div>


            {/* =========================================
                ARCHITECTURAL CORNERS
            ========================================= */}

            <div className="corner corner-top-left"></div>
            <div className="corner corner-top-right"></div>
            <div className="corner corner-bottom-left"></div>
            <div className="corner corner-bottom-right"></div>

        </main>
    );
}

export default NotFound;
