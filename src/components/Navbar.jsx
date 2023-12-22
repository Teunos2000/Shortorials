
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/libary", label: "Tutorial Library" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-lightblack p-4">
            <div className="container mx-auto flex flex-row items-center justify-between">

                {/* Logo on the left */}
                <NavLink to="/" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 mr-2" />
                </NavLink>

                {/* Hamburger Menu Icon on the right */}
                <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
                    <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </div>

                {/* Navigation Links */}
                <nav className={`md:flex text-lg gap-7 font-medium ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive ? "text-gold" : "text-white"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
