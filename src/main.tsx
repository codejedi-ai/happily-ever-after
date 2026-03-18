import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#23f0ff',
    },
    secondary: {
      main: '#ff824a',
    },
    background: {
      default: '#071722',
      paper: '#0b1f2f',
    },
  },
  typography: {
    fontFamily: '"Sora", "Space Grotesk", "Segoe UI", sans-serif',
    h2: {
      fontFamily: '"Orbitron", "Sora", sans-serif',
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: '"Orbitron", "Sora", sans-serif',
      letterSpacing: '0.01em',
    },
    h6: {
      fontFamily: '"Space Grotesk", "Sora", sans-serif',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
