import React from 'react';
import { useNavigate } from "react-router-dom"
import Navbar from '../components/Navbar';
import fileBoxLogo from '../assets/archivesBox.png';
import Background from '../components/Background';

const LandingPage: React.FC = () => {
	const navigate = useNavigate()
	return (
		<Background>
		<Navbar />
		<main className="main-content">
			<div className="content-container">
			{/* Logo Image */}
			<div className="logo-container">
				<img src={fileBoxLogo || "/placeholder.svg"} alt="auTask File Box" className="logo-image" />
			</div>

			{/* Text Content */}
			<div className="text-content">
				<h1 className="title">
				auTask<span className="accent-dot">.</span>
				</h1>
				<p className="tagline">
				Your platform to keep up.
				<br />
				Safe and simple.
				</p>
				<button className="get-started-button" onClick={() => navigate("/login")}>
				Get Started
				<svg className="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
					<path
					fillRule="evenodd"
					d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
					clipRule="evenodd"
					/>
				</svg>
				</button>
			</div>
			</div>
		</main>
		</Background>
	)
}

export default LandingPage