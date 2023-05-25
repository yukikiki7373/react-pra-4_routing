import { Link } from "react-router-dom";

const Notfound = () =>{
    return(
        <div>
            <p>Page is not found</p>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Notfound;