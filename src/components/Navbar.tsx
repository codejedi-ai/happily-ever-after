import React from 'react'
import { AppBar, Box, Button, Chip, Toolbar, Typography } from '@mui/material'

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: 'rgba(7, 4, 14, 0.6)',
        borderBottom: '1px solid rgba(255,77,109,0.3)',
        backdropFilter: 'blur(18px)',
      }}
    >
      <Toolbar sx={{ py: 1, gap: 2 }}>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            letterSpacing: 1.6,
            textTransform: 'uppercase',
            fontWeight: 800,
            textShadow: '0 0 24px rgba(255,77,109,0.9)',
            fontSize: { xs: '0.85rem', sm: '1rem' },
          }}
        >
          Happily Ever After City
        </Typography>
        <Chip
          label="Open Tonight"
          size="small"
          sx={{ bgcolor: 'rgba(255,77,109,0.16)', color: '#ffd3dc', border: '1px solid rgba(255,77,109,0.4)', fontWeight: 700 }}
        />
        <Button
          variant="outlined"
          size="small"
          sx={{ borderColor: 'rgba(255,204,77,0.55)', color: '#ffe9af', fontWeight: 700, display: { xs: 'none', sm: 'flex' } }}
        >
          Partner Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
