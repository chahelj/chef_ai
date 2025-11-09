import Markdown from "react-markdown";
export default function Recipe({RECIPE}) {
    
    
    return (
        <div className="suggested-recipe-container">

            <Markdown>{RECIPE}</Markdown>
        </div>
    );

}
        

