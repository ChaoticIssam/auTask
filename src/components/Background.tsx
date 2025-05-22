import type React from "react"

interface BackgroundProps {
  children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="outer-background">
      <div className="inner-background">{children}</div>
    </div>
  )
}

export default Background