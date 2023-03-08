import adoption from "../images/IMG_3456_Original.jpg"
import catSleepingOnCouch from "../images/IMG_2615.JPG"


const About = () => {
    return (
        <body>
            <h2 id="adoptionHeader">Adoption</h2>
                <section id="containerOne">
                    <div> Adopted July 29, 2020, at 2.2 pounds.</div>
                    <div> DOB: May 15, 2020 </div>
                    <div> POB: Romeoville, IL</div>
                    <div> Type: Tabby</div>
                    <div> Gender: Male </div>
                    
                </section>
                
                <section id="imageContainer"> 
                    <img id="adp" className="gtkm" src={adoption} alt="adoption"/>
                    <img id="soc" className="gtkm" src={catSleepingOnCouch} alt="cat sleeping on couch"/>
                </section>
        </body>  
    )
}

export default About;