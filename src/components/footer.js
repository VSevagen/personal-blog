import React from "react"
import "../components/main.css"
import Twitter from "../pages/blogs/images/twitter.png"
import Linkedin from "../pages/blogs/images/linkedin.png"
import Gitlab from "../pages/blogs/images/gitlab.png"

export default function Footer() {
    return (

        <div>
            <div class="bottom-separator"></div>

            <div class="footer">

                <div class="link-holder text-center">
                    <a href="https://gitlab.gnome.org/Sevagen" target="_blank" rel="noopener noreferrer"><img class="links" src={Gitlab} alt=""></img></a>
                    <a href="https://twitter.com/SevagenV" target="_blank" rel="noopener noreferrer"><img class="links" src={Twitter} alt=""></img></a>
                    <a href="https://www.linkedin.com/in/veerasamy-sevagen/" target="_blank" rel="noopener noreferrer"><img class="links" src={Linkedin} alt=""></img></a>
                </div>

                <div class="copyright text-center">Copyright © 2020 - Veerasamy S</div>
            </div>
        </div>
    );
}

