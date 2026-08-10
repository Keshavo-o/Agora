import React from "react";
import "./LoadingPage.css";

function LoadingPage() {
    return (
        <main className="agora-loading">

            <div className="loading-symbol">
                <span>A</span>
            </div>

            <div className="loading-brand">
                AGORA
            </div>

            <div className="loading-line">
                <div className="loading-progress"></div>
            </div>

            <p className="loading-text">
                ENTERING THE AGORA
            </p>

        </main>
    );
}

export default LoadingPage;
