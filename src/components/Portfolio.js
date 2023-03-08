import attack from "../images/IMG_3D9365D17FA5-1.jpeg"
import sherAtTheVet from "../images/IMG_0F9C494EE609-1.jpeg"
import sunBathing from "../images/IMG_0250_Original.jpg"



let Portfolio = () => {
    return (
        <section>

            <h2 id="portfolioHeader"> Sher's Different Moods </h2>
        
            <p className="moods"> Attacking </p>
            <p id="attk"className="Moods">  <img src={attack} alt="Cat attack"/> </p>
            

            <p className="moods"> Scared of the vet </p>
            <p id="sov" className="Moods"> <img src={sherAtTheVet} alt="Sher scared at the vet"/> </p>

            <p className="moods"> Sunbathing </p>
            <p id="sb"className="Moods"> <img src={sunBathing} alt="cat sunbathing"/> </p>
        

        </section>
    )
}

export default Portfolio;

// gives me an error with "sunbathing" but not "sunBathing"