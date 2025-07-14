import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import 'remixicon/fonts/remixicon.css'
import AnimatedCursor from 'react-animated-cursor'
import ThemeProvider from './Theme/contaxt.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <App />
    <Toaster />
    <AnimatedCursor
      innerSize={12}
      outerSize={14}
      color="255, 0, 128"
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={1}
    />
  </ThemeProvider>,
)
