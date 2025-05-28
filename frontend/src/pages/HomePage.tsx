"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"

const HomePage: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className="outer-background">
		<div className="inner-background">	
			<div className="homepage-container">
			{/* Header */}
			<header className="homepage-header">
				<div className="homepage-logo">
				<img
					src="/faviconLighMode.png"
					alt="Logo"
					className="main-logo"
					onClick={() => navigate("/home")}></img>
				<span className="logo-text">auTask<span className="accent-dot">.</span></span>
				</div>
				<div className="profile-container">
					<div className="profile-image">
						{/* <img src="/placeholder.svg?height=40&width=40" alt="Profile" /> */}
					</div>
				</div>
			</header>

			{/* Main Content Grid */}
			<main className="homepage-main">
				<div className="cards-grid">
				{/* Main Task Management Card */}
				<div className="card main-card">
					<div className="card-content">
					<h2 className="card-title">
						Manage Your
						<br />
						Tasks
						<br />
						Here
					</h2>
					</div>
				</div>

				{/* Weather Card */}
					<div className="card weather-card">
					<div className="weather-content">
						<div className="temperature">17°C</div>
					</div>
					<div className="weather-icon"></div>
					</div>

				{/* Contact Card */}
				<div className="card contact-card">
					<div className="contact-content">
						<h3 className="small-title">a Question?</h3>
						<h4 className="contact-title">Contact Us</h4>
					</div>
				</div>
				</div>
			</main>
			</div>
		</div>
		</div>	
	)
}

export default HomePage
