(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+eM2":function(e,t,a){},CEV5:function(e,t,a){e.exports=a.p+"static/gitlab-844769f2b72366a4a29a21ad041ee04c.png"},JSIj:function(e,t,a){e.exports=a.p+"static/dark-mode-03112ebbb8edd515aafdf514773e6b30.png"},LbRr:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("q1tI"),n=a.n(l),A=(a("+eM2"),a("JSIj")),o=a.n(A),r=a("vQWy"),c=a.n(r);function s(e){var t=sessionStorage.getItem("mode"),a=document.querySelectorAll("#blog-title"),l=document.querySelectorAll("h4"),n=document.querySelectorAll("p"),A=document.querySelector("#mode-style"),r=document.querySelector(".blog-content"),s=document.querySelector(".blog-title"),i=document.querySelector(".blog-date");if("false"===t){document.body.style.backgroundColor="black";for(var g=0,m=0;a.length,n.length,m<l.length;g++,m++)a[g].style.color="white",l[g].style.color="white",n[g].style.color="white";null!=r&&(r.style.color="white",s.style.color="white",i.style.color="white"),A.src=c.a,sessionStorage.setItem("mode","true")}if("true"===t){for(document.body.style.backgroundColor="white",g=0,0,m=0;a.length,n.length,m<l.length;g++,m++)a[g].style.color="#333",l[g].style.color="#333",n[g].style.color="#333";null!=r&&(r.style.color="#333",s.style.color="#333",i.style.color="#333"),A.src=o.a,sessionStorage.setItem("mode","false")}}function i(){return n.a.createElement("div",null,n.a.createElement("div",{class:"header"},n.a.createElement("div",{class:"site-title"},n.a.createElement("a",{id:"title",href:"/"},"My Blog"),n.a.createElement("div",{class:"site-options"},n.a.createElement("i",null,n.a.createElement("img",{id:"mode-style",src:o.a,alt:"",onClick:s,onKeyDown:s})),n.a.createElement("a",{id:"about",href:"/project"},"Projects"),n.a.createElement("a",{id:"about",href:"/about"},"About")))),n.a.createElement("div",{class:"separator"}))}"undefined"!=typeof window&&sessionStorage.setItem("mode","false")},RaTj:function(e,t,a){},TH3U:function(e,t,a){e.exports=a.p+"static/mediawiki1-a6e5448152885efd26fce9d4269672ff.png"},VQqO:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var l=a("q1tI"),n=a.n(l),A=a("LbRr"),o=a("W/9C"),r=(a("RaTj"),a("hjkN")),c=a.n(r),s=a("TH3U"),i=a.n(s),g=a("XZC3"),m=a.n(g),u=a("z1Z+"),k=a.n(u);function w(){return n.a.createElement("div",null,n.a.createElement(A.a,null),n.a.createElement("div",{class:"post-list"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("div",{class:"blog-title"},"Part 1: How to install MediaWiki"),n.a.createElement("div",{class:"blog-date"},"June 22, 2019"),n.a.createElement("div",null,n.a.createElement("p",{class:"blog-content"},"As you guys might know , I just got started in the field of programming and open-source contribution. I was hoping that it would be easy enough for me to grasp the concept but after a fatal step (of which I have no idea) , the task of installing MySQL became so elusive and frustrating that I was literally about to loss my mind . So I’m gonna try to prevent you guys from doing the same mistake as me."),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 1"),n.a.createElement("br",null),"Do not try install Apache,MySQL or PHP separately.",n.a.createElement("br",null)," Try using the command",n.a.createElement("strong",null," sudo apt-get install lamp-server^")," This will install all 3 of them.",n.a.createElement("br",null),n.a.createElement("img",{class:"blog_img img-thumbnail",alt:"",src:m.a})),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 2"),n.a.createElement("br",null),"Install git ,  if you do not already have it . To install it,use ",n.a.createElement("strong",null,"sudo apt-get install git")),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 3"),n.a.createElement("br",null),"After installing git, you must configure your username and email as git tracks any changes you make using your username and email.",n.a.createElement("br",null),n.a.createElement("strong",null,"git config –global “user.email”"),"—–Enter you email address instead of user.email.",n.a.createElement("br",null),n.a.createElement("strong",null,"git config –global “user.name”"),"—-Enter your chosen username and replace it with “user.name”."),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 4"),n.a.createElement("br",null),"Now, you need to generate SSH keys to establish a connection between your PC and Gerrit but to be able to generate a new key you need to check if a key already exists. To check for this , try :",n.a.createElement("br",null),n.a.createElement("strong",null,"ls~/.ssh"),n.a.createElement("br",null),n.a.createElement("strong",null,"ssh-keygen -t rsa -C “your email address”"),n.a.createElement("br",null),"After you enter the above command , you’re gonna be prompted for a passphrase. Do not worry about that just press enter. You now need to create a Gerrit account and add the SSH key. Follow the following steps.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("ul",{class:"list-group"},n.a.createElement("li",{class:"list-group-item",id:"special"},"1. Go to wikitech.wikimedia.org."),n.a.createElement("li",{class:"list-group-item",id:"special"},"2. Log into the web interface of Gerrit."),n.a.createElement("li",{class:"list-group-item",id:"special"},"3. Go to settings and click on “SSH Public Keys”"),n.a.createElement("li",{class:"list-group-item",id:"special"},"4. Paste your ssh key into the corresponding filed")),n.a.createElement("br",null),"Now , run ",n.a.createElement("strong",null,"eval ‘ssh-agent‘")," and ",n.a.createElement("strong",null,"ssh-add .ssh/id_rsa"),n.a.createElement("br",null),"In order not to get “Permission denied”, you should run ",n.a.createElement("strong",null,"ssh -p 29418 USERNAME@gerrit.wikimedia.org")),n.a.createElement("img",{class:"blog_img img-thumbnail",alt:"",src:i.a}),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 5"),n.a.createElement("br",null),"Download MediaWiki through the following command.",n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 6"),n.a.createElement("br",null),"Once the download is completed, you need to extract the folder and place it in your web directory. To extract the folder use the following command.",n.a.createElement("br",null),n.a.createElement("strong",null,"tar -xvzf /tmp/mediawiki-*.tar.gz"),n.a.createElement("br",null),"Now rename the mediawiki file as “core” and copy it to the www folder of var. If you are not able to paste it , it might be because your the folder is read only. So to solve this , apply the following command",n.a.createElement("strong",null," sudo chmod 777 -R 777 /var/www/html"),n.a.createElement("br",null),n.a.createElement("br",null),"This will remove any restriction and then just copy the core file into www folder. You can try to see if the localhost is working. So go to your browser and search for ",n.a.createElement("strong",null,"https://localhost/core/"),n.a.createElement("br",null),"It may also happen that you may not have installed all the extension . The extensions that you might be asked to download might be ",n.a.createElement("strong",null,"php-mdstring and xml"),".",n.a.createElement("br",null),n.a.createElement("br",null),"To install mbstring , just type the following command,",n.a.createElement("br",null),n.a.createElement("strong",null,"sudo apt-get install php-mbstring"),n.a.createElement("br",null),n.a.createElement("br",null),"To install xml,",n.a.createElement("br",null),n.a.createElement("strong",null,"sudo apt-get install php-xml"),"Once you completed downloading everything restart the Apache server using the command",n.a.createElement("strong",null," systemctl restart apache2"),n.a.createElement("br",null),n.a.createElement("br",null),"Now try localhost/core/ again. It should work."),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 7"),n.a.createElement("br",null),"Now just go through the local setting till you reach a page where you are asked for a for username and password. Those are actually for your database which you have not yet created. So open terminal and create a database.",n.a.createElement("br",null),n.a.createElement("br",null),"1. Create a mysql user.",n.a.createElement("br",null),n.a.createElement("img",{class:"blog_img img-thumbnail",src:k.a,alt:""}),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("strong",null,"sudo mysql -u root -p “password”")," —-Replace the “password” with an actual password.",n.a.createElement("br",null),n.a.createElement("strong",null,"mysql>CREATE USER ‘new_mysql_user’@’localhost’ IDENTIFIED BY “your password”;"),n.a.createElement("br",null),n.a.createElement("strong",null,"mysql>quit;"),n.a.createElement("br",null),n.a.createElement("br",null),"2. Create a mysql database pi_wiki",n.a.createElement("br",null),n.a.createElement("strong",null,"sudo mysql -u root    "),n.a.createElement("br",null),n.a.createElement("strong",null,"mysql> CREATE DATABASE pi_wiki;"),n.a.createElement("br",null),n.a.createElement("strong",null,"mysql> use pi_wiki;"),n.a.createElement("br",null),n.a.createElement("br",null),"3. Grant user access to new database.",n.a.createElement("br",null),n.a.createElement("strong",null,"mysql> GRANT ALL ON pi_wiki.* TO ‘new_mysql_user’@’localhost’;"),n.a.createElement("br",null),n.a.createElement("strong",null,"mysql>quit;"),n.a.createElement("br",null)),n.a.createElement("p",{class:"blog-content"},n.a.createElement("strong",null,"Step 8"),n.a.createElement("br",null),"Now fill in the boxes with the appropriate information and you're good to go.",n.a.createElement("br",null),n.a.createElement("img",{class:"blog_img img-thumbnail",src:c.a,alt:""})))))),n.a.createElement(o.a,null))}},"W/9C":function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var l=a("q1tI"),n=a.n(l),A=(a("Zwx9"),a("XlkO")),o=a.n(A),r=a("oDBR"),c=a.n(r),s=a("CEV5"),i=a.n(s);function g(){return n.a.createElement("div",null,n.a.createElement("div",{class:"bottom-separator"}),n.a.createElement("div",{class:"footer"},n.a.createElement("div",{class:"link-holder text-center"},n.a.createElement("a",{href:"https://gitlab.gnome.org/Sevagen",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{class:"links",src:i.a,alt:""})),n.a.createElement("a",{href:"https://twitter.com/SevagenV",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{class:"links",src:o.a,alt:""})),n.a.createElement("a",{href:"https://www.linkedin.com/in/veerasamy-sevagen/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{class:"links",src:c.a,alt:""}))),n.a.createElement("div",{class:"copyright text-center"},"Copyright © 2020 - Veerasamy S")))}},XZC3:function(e,t,a){e.exports=a.p+"static/mediawiki2-bac4cba9cc7d5cc77c878b57b20b063c.png"},XlkO:function(e,t,a){e.exports=a.p+"static/twitter-691cd3265c9201abdb2812d8536903a3.png"},Zwx9:function(e,t,a){},hjkN:function(e,t,a){e.exports=a.p+"static/mediawiki-14dc1675805e9511bf667ee286347f43.jpg"},oDBR:function(e,t){e.exports="data:image/png;base64,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"},vQWy:function(e,t,a){e.exports=a.p+"static/light-mode-e350fcfe945e3295949353e215810ae9.png"},"z1Z+":function(e,t,a){e.exports=a.p+"static/mediawiki3-8f617c9872310cb483d03aa1ddfe70b9.png"}}]);
//# sourceMappingURL=component---src-pages-blogs-mediawiki-setup-js-e2e41ca0f2e3d37bad5d.js.map