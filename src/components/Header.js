import { Link } from "react-router-dom"

import Logo from "./assets/Logo.png"

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src= {Logo} alt="bored-ape" />
            <Link to="/" className="flex items-center">
            <span> Taskapp </span>
            </Link>
            <Link to="profile" className="flex items-center">
            <span> Profile </span>
            </Link>
            <Link to="taskdetail" className="flex items-center">
            <span> Details </span>
            </Link>
            <Link to="login" className="flex items-center">
            <span> Login </span>
            </Link>
        </div>
    </header>
  )
}
