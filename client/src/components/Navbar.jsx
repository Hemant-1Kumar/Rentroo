import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setMenuOpened, containerStyles }) => {

  const NavLinks = [
    { path: "/", title: "Home" },
    { path: "/listing", title: "Listing" },
    { path: "/blog", title: "Blog" },
    { path: "/contact", title: "Contact" },
  ]

  return (
    <nav className={containerStyles}>
      {NavLinks.map((link) => (
        <NavLink
          onClick={() => {
            setMenuOpened(false)
            scrollTo(0, 0)
          }}
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""}
            px-3 py-2 rounded-full uppercase text-sm font-bold`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar