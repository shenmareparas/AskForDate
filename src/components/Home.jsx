import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/Yes");
    };

    const moveButton = () => {
        const noButton = document.getElementById("noButton");
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    };
    return (
        <>
            <div className="container">
                <div>
                    <h1 className="header_text">
                        Do you wanna go out with me?
                    </h1>
                </div>
                <div className="gif_container">
                    <img
                        src="https://i.postimg.cc/pdNqPxx1/milk-and-mocha-cute.gif"
                        alt="Cute animated illustration"
                    />
                </div>
                <div className="buttons">
                    <button className="btn" id="yesButton" onClick={nextPage}>
                        Yes
                    </button>
                    <button
                        className="btn"
                        id="noButton"
                        onMouseOver={moveButton}
                        onClick={moveButton}
                    >
                        No
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
