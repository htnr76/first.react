import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Abdi blog</h1>
            <div className="links">
                <Link to="/hem">Hem</Link>
                <Link to="/skapa">Ny blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;
