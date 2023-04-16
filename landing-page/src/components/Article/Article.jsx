import "./Article.css"
import articleObj from "./article.json"

function Article(){

    return (
        <div className="article_container">
            {articleObj.content.map((elements, index) =>(
                <a href={elements.link}>
                    <article key={index} className="Article" >
                    <img src={elements.image_path}></img>
                    <div>
                        <h4>{elements.title}</h4>
                        <p>{elements.description}</p>
                    </div>   
                    </article>
                </a>
            ))}

        </div>
    );

}

export default Article;