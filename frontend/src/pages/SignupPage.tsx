"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff } from "lucide-react"

const SignUpPage: React.FC = () => {
	const navigate = useNavigate()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [confirmpassword, setConfirmpassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// Handle signup logic here
		console.log("Form submitted:", { email, password })
	}

	const handleGoogleLogin = () => {
	// Handle Google login logic here
	console.log("Google login clicked")
	}

	const togglePasswordVisibility = () => {
    	setShowPassword(!showPassword)
	}
	const toggleConfirmPasswordVisibility = () => {
		setShowConfirmPassword(!showConfirmPassword)
	}

  return (
    <div className="outer-background">
      <div className="inner-background login-container">
        {/* Login page with Figma exported left panel */}
        <div className="login-page">
          {/* Left side with exported Figma design */}
          <div className="login-left-wrapper">
            <div className="login-left">
              {/* The background image will be your exported Figma design */}
            </div>
          </div>

          {/* Right side with form */}
          <div className="login-right">
            <div className="login-header">
              <button className="back-button" onClick={() => navigate("/")}>
				<img src="/faviconLighMode.png" alt="Logo" className="main-logo" />
              </button>
            </div>

            <div className="login-form-container">
              <div className="login-welcome">
                <h1 className="login-title">
                  Hi <span className="genius-text">Genius</span>
                </h1>
                <p className="login-subtitle">Create your AuTask account</p>
              </div>

              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group password-input-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-input password-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
				<div className="form-group password-input-container">
				  <input
				  	type={showConfirmPassword ? "text" : "password"}
					placeholder="Confirm Password"
					value={confirmpassword}
					onChange={(e) => setConfirmpassword(e.target.value)}
					className="form-input"
					required
					/>
				<button
					type="button"
					className="password-toggle"
					onClick={toggleConfirmPasswordVisibility}
					aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
					>
					{showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
				</button>
				</div>

                <div className="divider">
                  <span className="divider-text">Or</span>
                </div>

                <button type="button" className="google-button" onClick={handleGoogleLogin}>
                  <svg className="google-icon" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign Up With Google
                </button>

                <button type="submit" className="login-submit-button">
                  Sign Up
                </button>

                <div className="auth-switch">
                  <span className="auth-switch-text">
                    Already have an account?{" "}
                    <button type="button" className="auth-switch-link" onClick={() => navigate("/login")}>
                      Login
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
