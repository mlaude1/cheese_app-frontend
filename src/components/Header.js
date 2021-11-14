import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5SD_fP0u2vFw3gRuyOce0FKu52XA5BGXMg&usqp=CAU"/>
      </Link>
      <h1>Alex in Wonderland</h1>
    </nav>
  )
}

export default Header