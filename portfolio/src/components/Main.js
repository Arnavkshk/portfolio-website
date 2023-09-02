import React from 'react'
import './portfolio.css'
import mouse from "../assets/mouse.png"
import tenth from "../assets/10th.png"
import tewelve from "../assets/12th.png"
import deg from "../assets/degree.png"
import programpic from "../assets/laptop.png"
import webb from "../assets/web.png"
import phonepicc from "../assets/phonecall.png"
import emaill from "../assets/email.png"
import homee from "../assets/home.png"

const rev =()=>{
    for(let i=0;i<90;i++){
        let a=0;
        a=a+1;
        let html= a;
        document.getElementById("boardtext1").innerHTML = html;
    }


}
const Main = () => {
  return (
    <>
    <nav>
        <div><a href="/"> Home</a></div>
        <div>My Skills</div>
        <div>Projects</div>
        <div>Contact</div>
    </nav>
    <div id="main">
        <div id="particle-js"></div>
        <div id="particleChild">
            <p className="me">HELLO, IT'S ME</p>
            <h1 className="me">ARNAV KAUSHIK</h1>
            <p className="me">I AM A PROGRAMMER / WEB DEVELOPER</p>
        </div>
        <div id="main2"><img src={mouse} id="mouse" alt='' /></div>
    </div>
    
    <div id="aboutme" >
        <div id="aboutme2">
        <div id="img"></div>
        <p id="info2">PERSONAL INFO </p>
        <div id="bar1"></div>
        <p className="info1">NAME:</p>   
        <p className="info">ARNAV KAUSHIK</p>   
        <p className="info1">E-MAIL:</p>  
        <p className="info">ARNAV22112003@GMAIL.COM</p>   
        <p className="info1">PHONE NUMBER:</p>  
        <p className="info">+91 8285215745</p> 
        <p className="info1">WEBSITE:</p> 
        <p className="info"><a href="www.google.com"> ARNAVKSHK.GITHUB.IO</a></p>
        </div>
        <div id="text">
            <h1 id="nobar">ARNAV KAUSHIK</h1>
            <div id="bar"></div><br/>
            <p>PROGRAMMER / WEB DEVELOPER</p><br/>
            <p>I am a 19-year-old Open Source enthusiast who writes code out of the profession and loves to engage in
                tech communities out of passion. While I have a comprehensive developer background.
            </p>
            <div className="accordion accordion-flush " id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse"data-bs-target="#flush-collapseOne"aria-expanded="false"aria-controls="flush-collapseOne">
                            MY CAREER OBJECTIVE.
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Software Engineering fresher with the ability to offer quick and effective tech solutions to businesses that are highly-tech driven. Looking for a challenging startup-like environment that provides me with a opportunity for learning and advancement.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed"type="button"data-bs-toggle="collapse"data-bs-target="#flush-collapseTwo"aria-expanded="false"aria-controls="flush-collapseTwo">
                            MY AREA OF STRENGTH.
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">I am proficient in C/C++,html,css and javascript these are the area where i specialize.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#flush-collapseThree"aria-expanded="false"aria-controls="flush-collapseThree">
                            MY FUTURE GOALS.
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse"aria-labelledby="flush-headingThree"data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#flush-collapseFour"aria-expanded="false"aria-controls="flush-collapseFour">
                            MY HOBBIES.
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse"aria-labelledby="flush-headingFour"data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">In my free time i love playing online games or watching some webseries also to explore about new and upcoming technologies</div>
                    </div>
                </div>
            </div>
            </div>
            </div>

    <div id="page3" onClick={rev}>
        <div id="page3one">
            <div id="board10" className="page3oneone" >
                <img src={tenth} alt=""/>
                <div id="boardtext1" className="pictext"></div>
            </div>
            <div id="board12" className="page3oneone">
                <img src={tewelve} alt=""/>
                <div id="boardtext2" className="pictext">00.00</div>
            </div>
            <div id="degree" className="page3oneone">
                <img src={deg} alt=""/>
                <div id="degreetext" className="pictext">00.00</div>
            </div>
        </div>
        <div id="page3two">
            <div id="page3oneone">
                <div id="whathead">
                    <div id="whathead1">WHAT I'M DOING</div>
                    <div id="whatheadbar"></div>
                    <div id="whathead2">Here is the overview of what all i am doing for my career.</div>
                </div>
            </div>
            <div id="page3twotwo">
                <div id="program">
                    <img id="progpic" src={programpic} alt=""/>
                    <h3>PROGRAMMING</h3>
                    <p>The foundation for a computer science student is competitive programming with efficiency in algorithms.
                    </p>
                </div>
                <div id="webdev">
                    <img id="webpic" src={webb} alt=""/>
                    <h3>WEB DEVELOPMENT</h3>
                    <p>I'm equipped with the latest MERN Stack for creating high end website design and business solutions.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="page4">
        <div id="getintouch">GET IN TOUCH</div>
        <div id="page4bar"></div>
        <div id="aboutpg4">
            <div id="call">
                <img id="phonepic" src={phonepicc} alt=""/>
                <h3>CALL ME</h3>
                <h5>8285215745</h5>
            </div>
            <div id="message">
                <img src={emaill} alt="" id="messagepic"/>
                <h3>SEND A MESSAGE</h3>
                <h5>ARNAV22112003@gamil.com</h5>
            </div>
        
            <div id="visit">
                <img id ="homepic" src={homee} alt=""/>
                <h3>VISIT ME</h3>
                <h5>Ramapuam,Chennai,India</h5>
            </div>
        </div>
        </div>
    </>
  )
}


export default Main
