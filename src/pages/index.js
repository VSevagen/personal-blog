import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import "../components/main.css"
import Footer from "../components/footer.js"
import Header from "../components/header.js"

export default function Home()  {
    return (
        <div class="blog">
            <Header />

            <div class="post-list">
                <ul>
                    <li>
                        <a id="blog-title" href="/blogs/gnomeasia">GNOMEAsia 2019</a>
                        <h4>
                        First of all, I would like to thank the GNOME Foundation and the travel committee for providing me the sponsorship to attend this event.
                        </h4>
                        <p>Oct 15, 2019</p>
                    </li>
                    <li>
                        <a id="blog-title" href="/blogs/mysqlErr">ERROR 2002(HY000) Can't connect to MySQL server</a>
                        <h4>
                        Mediawiki’s installation is quite simple if the correct steps are followed and applied but it may happen that during the installation a package was not correctly configured or worse , broken. Rest assured , you do not need to uninstall ubuntu , at least not now.
                        </h4>
                        <p>June 22, 2019</p>
                    </li>
                    <li>
                        <a id="blog-title" href="/blogs/mediawikiSetup">Part 1: How to install MediaWiki</a>
                        <h4>
                        As you guys might know , I just got started in the field of programming and open-source contribution. I was hoping that it would be easy enough for me to grasp the concept but after a fatal step (of which I have no idea) , the task of installing MySQL became so elusive and frustrating that I was literally about to loss my mind.
                        </h4>
                        <p>June 22, 2019</p>
                    </li>
                    <li>
                        <a id="blog-title" href="/blogs/python">Python as the first programming language to learn</a>
                        <h4>
                        Python is administered by the non-profit Python Software Foundation. It is a programming language which is quite versatile for different sorts of projects and easy for beginners to read and grasp.Firstly , everything about Python is free and available online. The language is open-sourced and free to use for everyone.
                        </h4>
                        <p>June 22, 2019</p>
                    </li>
                    <li>
                        <a id="blog-title" href="/blogs/fosstalk">My First FossTalk !!!</a>
                        <h4>
                        As you guys might know , I just got started in the field of programming and open-source contribution. I was hoping that it would be easy enough for me to grasp the concept but after a fatal step (of which I have no idea) , the task of installing MySQL became so elusive and frustrating that I was literally about to loss my mind . So I’m gonna try to prevent you guys from doing the same mistake as me.
                        </h4>
                        <p>June 25, 2019</p>
                    </li>
                </ul>
            </div>

            <Footer />
        </div>
    );
}
