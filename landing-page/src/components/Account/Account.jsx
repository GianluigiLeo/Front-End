import "./Account.css"


function Search() {

    let isVisible = false;

     

    let clickAccount = () => {
        let handleAccount = document.querySelector(".Login > ul");

        // Nav Handle
        let handleMenu = document.querySelector(".Menu > ul");
        let handlHamburger = document.querySelector(".Nav");
        let handleBody = document.querySelector("body");

        //Search Handle
        let handleSearchInput = document.querySelector(".searchInput > form > input");
        let handleSearchIcon = document.querySelector(".iconSearch");

        if(isVisible == false){

             //Verifica se è aperto il menu
             if(handleMenu.style.visibility == "visible"){
                handlHamburger.setAttribute("class", "Nav");
                handleMenu.style.visibility = "hidden";
                handleBody.style.backgroundColor = "white";
                handleBody.style.overflow = "scroll";
                
            }
            //Verifica se l'input search è aperto
            if(handleSearchInput.style.visibility == "visible"){
                handleSearchInput.style.visibility = "hidden";
                handleSearchIcon.style.visibility = "hidden"; 
            }


            handleAccount.style.visibility = "visible";
            isVisible = true;
        }
        else if(isVisible == true){
            handleAccount.style.visibility = "hidden";
            isVisible = false;
        }
        
    }

    return (
       <div className="Account" onClick={clickAccount}>
            <a href="#"><i class="fa-regular fa-user"></i></a>
            <div className="Login">
                <ul>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Create Account</a>
                    </li>
                </ul>
            </div>
            
       </div>
    );

}

export default Search;