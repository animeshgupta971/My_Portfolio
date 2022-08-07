import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav className="">
            <div className="">
                <ul className="nav--wrapper">
                    <li className="nav--item">
                        <Link className="nav--link" to="/">Home</Link>
                    </li>
                    <li className="nav--item">
                        <Link className="nav--link" to="/about">About</Link>
                    </li>
                    <li className="nav--item">
                        <Link className="nav--link" to="/services">Services</Link>
                    </li>
                    <li className="nav--item">
                        <Link className="nav--link" to="/skills">Skills</Link>
                    </li>
                    <li className="nav--item">
                        <Link className="nav--link" to="/Contact">Conatct US</Link>
                    </li>
                </ul>
            </div>
    </nav>
</>
  )
}

export default Navbar