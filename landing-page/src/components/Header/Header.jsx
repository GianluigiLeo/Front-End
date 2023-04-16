import Nav from "../Nav"
import Search from "../Search"
import Logo from "../Logo"
import Account from "../Account"
import Cart from "../Cart"
import "./Header.css"

function Header(){

    // Modificare questa variabile per cambiare il titolo del sito e il link
    let titlePage = {text: "LandingPageWebSite", link: "google.com"};
    
    return (
        <header className="Header">
             <Nav />
             <Search />
             <Logo text={titlePage.text} link={titlePage.link}/>
             <Account />
             <Cart />
        </header>
       
    );

}

export default Header;