
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className="bg-white shadow dark:bg-gray-800">
        <div className="p-4 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between md:p-6">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 
            <Link to="/taskdetails" className="hover:underline">CodeBook</Link>. All Rights Reserved.</span>
          <span>&copy; ApeTask.</span>
        </div>
        <div>
          <span>Powered by</span>
          <a href="/">ApeTask</a>
        </div>
      </footer>
    )
  }