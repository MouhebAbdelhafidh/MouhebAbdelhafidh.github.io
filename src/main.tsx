import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "next-themes"

import App from "./App"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Light-only site; ThemeProvider is here because AnimatedGradient reads the theme */}
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>
)
