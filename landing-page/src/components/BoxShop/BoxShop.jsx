import "./BoxShop.css"
import shopBox from "./boxShop.json"

function BoxShop (){
    
    return (
        <>
            {shopBox.content.map((elements, index) =>(
                <div key={index} className="BoxShop">
                    <img src={elements.image_path}></img>
                    <form method="get" action={elements.link}>
                        <h2>{elements.title}</h2>
                        <p>{elements.description}</p>
                        <button type="submit">SHOP NOW</button>
                    </form>
                </div>
            ))}
       
        </>
        
    );
}

export default BoxShop;