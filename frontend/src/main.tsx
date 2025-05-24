import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage.tsx"
import LoginPage from "./pages/LoginPage.tsx"
import SignUpPage from "./pages/SignupPage"
import HomePage from "./pages/HomePage.tsx"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
	path: "/home",
	element: <HomePage />,
  }
])

const rootElement = document.getElementById("root")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
