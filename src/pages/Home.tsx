import React, { useState, useEffect, useCallback } from 'react'
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Paper,
  Stack,
  AppBar,
  Toolbar,
  CircularProgress
} from '@mui/material'
import QRCode from 'qrcode'

export default function Home() {
  const [url, setUrl] = useState('')
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const generateQRCode = useCallback(async (inputUrl: string) => {
    if (!inputUrl.trim()) {
      setQrCodeUrl('')
      setError('')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const qrUrl = await QRCode.toDataURL(inputUrl, {
        width: 300,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      })
      setQrCodeUrl(qrUrl)
    } catch (err) {
      setError('Failed to generate QR code')
      setQrCodeUrl('')
      console.error('QR Code generation error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Generate QR code in real-time as user types
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      generateQRCode(url)
    }, 1) // 300ms debounce to avoid too many API calls

    return () => clearTimeout(timeoutId)
  }, [url, generateQRCode])

  const downloadQRCode = () => {
    if (!qrCodeUrl) return

    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = qrCodeUrl
    link.click()
  }

  const clearQRCode = () => {
    setQrCodeUrl('')
    setUrl('')
    setError('')
  }

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #fce4ec 50%, #fff3e0 100%)' }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(10px)' }} elevation={1}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
              Live QR Generator
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h2" sx={{ color: 'text.primary', fontWeight: 'bold', textAlign: 'center' }}>
            Live QR Code Generator
          </Typography>
          
          <Typography variant="h6" sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 600 }}>
            Start typing any URL below and watch the QR code generate in real-time!
          </Typography>
          
          <Paper 
            sx={{ 
              p: 4, 
              borderRadius: 3, 
              width: '100%',
              maxWidth: 600,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)'
            }}
            elevation={3}
          >
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Enter URL"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                variant="outlined"
                error={!!error}
                helperText={error || (url.trim() ? 'QR code updates as you type...' : 'Start typing to see live QR generation')}
                InputProps={{
                  endAdornment: isLoading && (
                    <CircularProgress size={20} />
                  )
                }}
              />

              {qrCodeUrl && (
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'text.primary' }}>
                    Your Live QR Code:
                  </Typography>
                  <Box sx={{ mb: 3, position: 'relative' }}>
                    <img 
                      src={qrCodeUrl} 
                      alt="Generated QR Code" 
                      style={{ 
                        maxWidth: '100%', 
                        border: '1px solid #ddd', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        transition: 'opacity 0.3s ease',
                        opacity: isLoading ? 0.7 : 1
                      }} 
                    />
                    {isLoading && (
                      <Box sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)' 
                      }}>
                        <CircularProgress />
                      </Box>
                    )}
                  </Box>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={downloadQRCode}
                      disabled={!qrCodeUrl || isLoading}
                    >
                      Download QR Code
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={clearQRCode}
                    >
                      Clear
                    </Button>
                  </Stack>
                </Box>
              )}

              {!qrCodeUrl && !isLoading && url.trim() && (
                <Box sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    Type a valid URL to see the QR code appear instantly
                  </Typography>
                </Box>
              )}
            </Stack>
          </Paper>
        </Stack>
      </Container>

      <Box component="footer" sx={{ backgroundColor: '#f5f5f5', mt: 10 }}>
        <Container maxWidth="xl" sx={{ py: 3 }}>
          <Typography variant="body1" sx={{ textAlign: 'center', color: 'text.secondary' }}>
            © 2024 Live QR Generator. Real-time QR code generation as you type.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
