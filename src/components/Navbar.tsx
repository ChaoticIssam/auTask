import type React from "react"
import { useNavigate } from "react-router-dom"
import { useState, useRef, useEffect } from "react"

const Navbar: React.FC = () => {
	const navigate = useNavigate()
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const iconRef = useRef<HTMLDivElement>(null)

	// Handle clicks outside the dropdown
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node) &&
			iconRef.current &&
			!iconRef.current.contains(event.target as Node)
		) {
			setIsDropdownOpen(false)
		}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
		document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev)
	}

	const handleLogin = () => {
		setIsDropdownOpen(false)
		navigate("/login")
	}

	const handleSignUp = () => {
		setIsDropdownOpen(false)
		navigate("/signup")
	}

	return (
		<nav className="navbar">
		<div className="logo">
			<img src="/faviconLighMode.png" alt="Logo" className="main-logo" />
		</div>
		<div className="user-menu-container">
			<div
			ref={iconRef}
			className="user-icon"
			onClick={toggleDropdown}
			aria-expanded={isDropdownOpen}
			aria-haspopup="true"
			>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path
				fillRule="evenodd"
				d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
				clipRule="evenodd"
				/>
			</svg>
			</div>

		{isDropdownOpen && (
			<div ref={dropdownRef} className="user-dropdown">
				<div className="dropdown-arrow"></div>
				<ul className="dropdown-menu">
				<li className="dropdown-item">
					<button className="dropdown-button" onClick={handleLogin}>
					Login
					</button>
				</li>
				<li className="dropdown-item">
					<button className="dropdown-button" onClick={handleSignUp}>
					Sign Up
					</button>
				</li>
				</ul>
			</div>
			)}
		</div>
		</nav>
	)
}

export default Navbar