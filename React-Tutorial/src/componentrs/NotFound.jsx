import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">

      <h2>Sorry</h2>
      <p>That page is not available</p>
      <Link to="/">Home Page</Link>
    </div>

  );
}
 
export default NotFound;