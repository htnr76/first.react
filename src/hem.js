import BlogList from './BlogList';
import useFetch from './useFetch';

const Hem = () => {
    const {data: blogs, isPending, error} = useFetch(' http://localhost:8000/blogs');
    return ( 
        <div className="hem">
            {error && <div>{error}</div>}
            {isPending && <div>Loading....</div>}
           { blogs && <BlogList blogs={blogs}/>}
        </div>
     );
}
 
export default Hem;
