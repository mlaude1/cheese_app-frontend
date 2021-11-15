import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <img src="https://i.imgur.com/wbDiJ5R.png"/>
        <h1>Alex in Wonderland</h1>
      </Link>
      
    </nav>
  )
}

export default Header