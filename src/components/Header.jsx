import React from "react";

export default function Header() {

    return (
        <header>
            <img src="images/img.jpg" alt="Sharath Lingam" />
            <h1>Sharath Lingam</h1>
            <h3>Full Stack Developer</h3>
            <div className="mail_linkedin">
                <a href="sharathlingams@gmail.com" className="mail">
                    <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                </a>
                <a href="https://www.linkedin.com/in/sharathlingam/" className="linkedin">
                    <i class="fa-brands fa-linkedin"></i>
                    <h4>LinkedIn</h4>
                </a>
            </div>
        </header>
    );

}