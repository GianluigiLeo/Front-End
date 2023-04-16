import "./Logo.css"


function Logo({text, link}){

    return (
        <div className="Logo">
            <a href={link}>{text}</a>
        </div>
        
    );
}

export default Logo;