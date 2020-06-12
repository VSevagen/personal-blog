import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import {Helmet} from "react-helmet";
import DarkMode from "../pages/blogs/images/dark-mode.png"
import LightMode from "../pages/blogs/images/light-mode.png"

if(typeof window !== undefined) {
    if(localStorage !== undefined) {
        localStorage.setItem('mode', 'false');
    }
}

function handleClick(e) {
    // e.preventDefault();
    //  fetch('data.txt',{mode: 'no-cors'})
    //  .then(response => {
    //      if (!response.ok) {
    //          throw new Error('Network response was not ok');
    //      }
    //      return response.text();
    //  })
    //  .then(function(data){
    //      console.log(data);
    //  })
    // var rawFile = new XMLHttpRequest();
    // var file = "file:///home/sevagen/Desktop/personal-blog/src/components/data.txt"
    // rawFile.open("GET", file, false);
    // rawFile.onreadystatechange = function ()
    // {
    //     if(rawFile.readyState === 4)
    //     {
    //         if(rawFile.status === 200 || rawFile.status == 0)
    //         {
    //             var allText = rawFile.responseText;
    //             console.log(allText);
    //         }
    //     }
    // }
    // rawFile.send(null);
    console.log("The link is clicked");
    let data = localStorage.getItem("mode");
    var a = document.querySelectorAll("#blog-title");
    var h4 = document.querySelectorAll("h4");
    var p = document.querySelectorAll("p");
    var img = document.querySelector("#mode-style");
    var blogContent = document.querySelector(".blog-content");
    var blogTitle = document.querySelector(".blog-title");
    var blogDate = document.querySelector(".blog-date");
    
    if(data == "false"){
        document.body.style.backgroundColor = 'black';
        for(var i =0,j=0,k=0;i<a.length,j<p.length,k<h4.length;i++,j++,k++){
            a[i].style.color = "white";
            h4[k].style.color = "white";
            p[j].style.color = "white";
        }
        if(blogContent != undefined) {
            blogContent.style.color = "white";
            blogTitle.style.color = "white";
            blogDate.style.color = "white";
        }
        img.src = LightMode;
        localStorage.setItem('mode', 'true');
    }
    
    if(data == "true") {
        console.log("This is whhite mode");
        document.body.style.backgroundColor = "white";
        for(var i =0,j=0,k=0;i<a.length,j<p.length,k<h4.length;i++,j++,k++){
            a[i].style.color = "#333";
            h4[k].style.color = "#333";
            p[j].style.color = "#333";
        }
        if(blogContent != undefined) {
            blogContent.style.color = "#333";
            blogTitle.style.color = "#333";
            blogDate.style.color = "#333";
        }
        img.src = DarkMode;
        localStorage.setItem('mode', 'false');
        
    }
}

export default function Header() {
    return (
        <div>
            <div class="header">
                <div class="site-title">
                    <a id="title" href="/">My Blog</a>
                    <div class="site-options">
                        <a>
                        <img id="mode-style" src={DarkMode} alt="" onClick={handleClick}></img>
                        </a>
                        <a id="about" href="/project">Projects</a>
                        <a id="about" href="/about">About</a>
                    </div>
                </div>
            </div>

            <div class="separator"></div> 
        </div>
    );
}