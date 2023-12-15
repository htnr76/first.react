import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return (
        <div className="notFound">
            <h2>Förlåt</h2>
            <p>Men sidan du har angett kan inte hittas</p>
            <Link to="/hem">Här har du länken till Hemsidan</Link>
        </div>
      );
}
 
export default NotFound;