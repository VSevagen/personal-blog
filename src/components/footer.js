import React from "react"
import "../components/main.css"

export default function Footer() {
    return (

        <div>
            <div class="bottom-separator"></div>

            <div class="footer">

                <div class="link-holder">
                    <a href="https://gitlab.gnome.org/Sevagen" target="_blank" rel="noopener noreferrer"><img src="https://cdn.icon-icons.com/icons2/2248/PNG/512/gitlab_icon_137548.png" alt=""></img></a>
                    <a href="https://twitter.com/SevagenV" target="_blank" rel="noopener noreferrer"><img src="https://cdn.icon-icons.com/icons2/1/PNG/256/social_Twitter_38.png" alt=""></img></a>
                    <a href="https://www.linkedin.com/in/veerasamy-sevagen/" target="_blank" rel="noopener noreferrer"><img src="https://cdn.icon-icons.com/icons2/1/PNG/256/sociallinkedin_member_30.png" alt=""></img></a>
                </div>

                <div class="copyright">Copyright © 2020 - Veerasamy S</div>
            </div>
        </div>
    );
}

