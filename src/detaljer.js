import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetaljer = () => {
    const {id } = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const radera = () =>(
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        } ).then(() => {
            history.push('/hem');
            console.log("inläget ska raderas nu")
        })
    )
   
    return ( 
        <div className="blog-detaljer">
            { isPending && <div>Laddar...</div> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Skriven av { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={radera}>Radera</button>
                </article>

            )}
        </div>
    );
}
 
export default BlogDetaljer;