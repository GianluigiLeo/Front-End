import "./Slide.css"
import slide from "./slide.json"




function Slide(){
   
    let simbol1 = "<";
    let simbol2 = ">";
    let slideLenght = slide.content.length;
    let cont = 1;

    let nextImg = () =>{
        cont++;
        if(cont > slideLenght){
            cont = 1;
        }

        for(let i = slideLenght; i > 0; i--){
            document.querySelector(`.Slide:nth-child(`+`${i}`+`)`).style.display = "none";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.display = "flex";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.justifyContent = "center";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.alignItems = "center";
            // document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.transition = "opacity 1.30s ease 0s";


        }
    }


    let prevImg = () =>{
        cont--;

        if(cont < 1){
            cont = slideLenght;
        }
       
        for(let i = slideLenght; i > 0; i--){
            document.querySelector(`.Slide:nth-child(`+`${i}`+`)`).style.display = "none";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.display = "flex";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.justifyContent = "center";
            document.querySelector(`.Slide:nth-child(`+`${cont}`+`)`).style.alignItems = "center";

        }

        
    }




    return (
        <div className="m_Slide">
            

            {slide.content.map((elements, index) => (
                <div className="Slide" key={index}>
                    <button onClick={prevImg}>{simbol1}</button>
                    <img src={elements.image_path}></img>
                    <button onClick={nextImg}>{simbol2}</button>
                </div>
            ))}

        

            {/* <div className="container-dot">
                <span className="dot"></span> 
                <span className="dot"></span> 
                <span className="dot"></span> 
            </div> */}

        </div>
    );
}


export default Slide;