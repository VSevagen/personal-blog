import React from "react"

export default function Header() {
    return (
        <div>
            <div class="header">
                <div class="site-title">
                    <a id="title" href="/">My Blog</a>
                    <div class="site-options">
                        <a id="about" href="/about">About</a>
                    </div>
                </div>
            </div>

            <div class="separator"></div> 
        </div>
    );
}