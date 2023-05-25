import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
    return (
        <div className="container d-flex align-items-center justify-content-center flex-column" style={{ height: "90vh", boxSizing: "border-box" }}>
            <div className="text-center" style={{ width: "60%", marginTop: "10rem" }}>
                <h1>
                    Welcome to <span style={{ color: "#2E8B57" }}>our Page</span>
                    <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg>
                </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae impedit reiciendis sapiente numquam cumque reprehenderit tempora nulla rerum quidem, deserunt hic alias officia saepe aperiam magnam, explicabo aspernatur
                    ipsam molestiae?
                </p>
                <button className="btn text-white fw-bold p-2 px-3" style={{ backgroundColor: "#2E8B57" }}>
                    Learn More
                </button>
            </div>
            <div className="align-align-self-end h6 fw-semibold" style={{ marginTop: "13rem" }}>
                <span>copyright </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-c-circle" viewBox="0 0 16 16">
                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
                </svg>
                <span style={{ color: "#2E8B57" }}> kelompok 4</span>
            </div>
        </div>
    );
}
