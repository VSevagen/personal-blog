import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"
import Comments from "../../components/comments"
import School from "./images/school.jpg"
import GroupFoto from "./images/groupfoto.jpg"
import GroupFoto2 from "./images/groupfoto2.jpg"
import Foto3 from "./images/foto3.jpg"
import Foto4 from "./images/foto4.jpg"

export default function Visit() {
    return (
        <div>
            <Header />
            <div class="post-list">
                <ul>
                    <li>
                        <div class="blog-title">School Visit</div>
                        <div class="blog-date">Oct 6, 2019</div>
                        <div>
                            <p class="blog-content">
                            The School Visit program is part of the Amrita Values Programme here at Amritapuri. The latter introduces the students to the concept of public social awareness and how to transmit the messages of social consciousness to the general public. In our case, we were asked to present a topic of our choice to a group of high schoolers. We were pretty intrigued in the beginning since this kind of program was a first for all of us. In any case, this is how it went.<br></br><br></br>
                            <img id="special" class="blog_img" src={School} alt=""></img><br></br><br></br>
                            It all happened on the 17th of September of 2019. Our batch was assigned Amrita Vidyalayam, which is found in Paripally. We had to explain our topic, which was “Civic Responsibility” to a 10th standard class. We were pretty confident since all of us had prepared our respective section meticulously.<br></br><br></br>

At around 10.00 am, we reached high school and were introduced to the students. There were approximately sixty students, with the majority of them being boys. We started by introducing ourselves, followed by the college prayer. I was amazed to see the discipline exhibited by those youngsters, as all of them stood up and started singing.<br></br><br></br>
<img id="special" class="blog_img" src={GroupFoto} alt=""></img><br></br><br></br>
After completing those formalities, we went on to explain our respective topics to the students. We divided them into small groups so as make the interaction more personal and make them speak up. It was a good idea since most of them were responding to my questions pretty quickly and in turn, were asking doubts as well.<br></br><br></br>
<img  id="special" class="blog_img" src={GroupFoto2} alt=""></img>
My topic was related to “Rules” in general and why should we obey them. “Helping others” was taken by Anagha. “Women issues” was taken by Gopika. “Vote Casting” was taken by K Sai Rithwik. “Child Abuse” was taken by A . RatnaVybhav and “Resource Management” was taken by K.Sai Krishna.<br></br><br></br>
<img class="blog_img" id="special" src={Foto3} alt=""></img><br></br><br></br>
The most captivating moment of the visit, however, was Gopika’s dance. Her topic was “Women issues” and her dance depicted the atrocities inflicted against them. The students were captivated by her, and I’m sure that everyone understood her message. In the end, we all were satisfied with what we had accomplished, and I believe we left a positive impression on those students before leaving.<br></br>
<img class="blog_img" id="unique" src={Foto4} alt=""></img>
<p class="custom-text text-center">Gopika Dancing</p>
                            </p>
                        </div>
                    </li>
                </ul>
                <Comments />
            </div>
            <Footer />
        </div>
    );
}