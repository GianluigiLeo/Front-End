import "./Nav.css"
import menuContent from "./menu.json"

function Nav(){
    

    let clickHamburger = () =>{
        let handleHamburger = document.querySelector(".Nav")
        let handleMenu = document.querySelector(".Menu > ul");
        let handleMainMenu = document.querySelector(".Menu");
        let handleMain = document.querySelector(".Main");
        let handleBody = document.querySelector("body");//Da modificare per lo sfonodo del menu
        
        //Handle Search
        let handleSearchInput = document.querySelector(".searchInput > form > input");
        let handleSearchIcon = document.querySelector(".iconSearch");

        //Handle Account
        let handleAccount = document.querySelector(".Login > ul");


        if(handleHamburger.className == "Nav open"){

            handleHamburger.setAttribute("class", "Nav");
            handleMenu.style.visibility = "hidden";
            handleMainMenu.setAttribute("class", "Menu");
            // handleBody.style.backgroundColor = "white";
            handleMain.style.filter = "grayscale(0%)";
            handleBody.style.overflow = "scroll";
            

        }
        else{

            //Verifica se è apeto l'input search
            if(handleSearchInput.style.visibility == "visible" && handleSearchIcon.style.visibility == "visible"){
                handleSearchInput.style.visibility = "hidden";
                handleSearchIcon.style.visibility = "hidden";
            }
            // Verifica se è aperto il menu Account
            if(handleAccount.style.visibility == "visible"){
                handleAccount.style.visibility = "hidden";
                
            }
        
            handleHamburger.setAttribute("class", "Nav open");
            handleMenu.style.visibility = "visible";
            handleMainMenu.setAttribute("class", "Menu animation");
            // handleBody.style.backgroundColor = "lightgray";
            // handleBody.style.filter = "grayscale(30%)";
            handleMain.style.filter = "grayscale(60%)";
            handleBody.style.overflow = "hidden";
            
        }
    }

    return (
        <nav className="Nav" onClick={clickHamburger}>
            <span></span>
            <span></span>
            <span></span>
        
        <div className="Menu">
            <ul>
                    {menuContent.content.map((elements, index) => (
                        <li key="index">
                            <a href={elements.link}>{elements.text}</a>
                        </li>
                    ))}
            </ul>
        </div>
            
            
        </nav>
    );

}

export default Nav;