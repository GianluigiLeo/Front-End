import "./Search.css"


function Search() {

    let isVisible = false;

    let clickSearch = () => {
        let handleSearchInput = document.querySelector(".searchInput > form > input");
        let handleSearchIcon = document.querySelector(".iconSearch");
        

        // Nav Handle
        let handleMenu = document.querySelector(".Menu > ul");
        let handlHamburger = document.querySelector(".Nav");
        let handleBody = document.querySelector("body");

        //Account Hancle
        let handleAccount = document.querySelector(".Login > ul");
        
        if(isVisible == false){
            
            //Verifica se è aperto il menu
            if(handleMenu.style.visibility == "visible"){
                handlHamburger.setAttribute("class", "Nav");
                handleMenu.style.visibility = "hidden";
                handleBody.style.backgroundColor = "white";
                handleBody.style.overflow = "scroll";
                
            }
            //Verifica se è aperto il menu Account
            if(handleAccount.style.visibility == "visible"){
                handleAccount.style.visibility = "hidden";
                
            }

            handleSearchIcon.style.visibility = "visible";
            handleSearchInput.style.visibility = "visible";
            isVisible = true;
        }
        else if(isVisible == true){
            handleSearchIcon.style.visibility = "hidden";
            handleSearchInput.style.visibility = "hidden";
            isVisible = false;
        }

        
        
    }

    return (
        <div className="Search">
            <a href="#"><i class="fa-solid fa-magnifying-glass" onClick={clickSearch}></i></a>

            <div className="searchInput">
                <form method="get" action="#">
                    <input type="text" placeholder="Search Our Catalog"/>
                    
                    <button type="submit" className="iconSearch">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button> 
                </form>
                
            </div>
            
        </div>
    );

}

export default Search;